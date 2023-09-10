import {useContext, useState} from "react";
import { Link as RouterLink } from 'react-router-dom';

import {Box, FormControl, IconButton, InputLabel, Typography, useTheme} from "@mui/material";
import {Select, Tooltip, FormControlLabel, Chip} from "@mui/material";
import {Menu, Button, MenuItem} from "@mui/material";


import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import {ColorModeContext, tokens} from "../../theme";
import Logo from '../../assets/logo.svg';



const Topbar=() =>{
  const theme = useTheme();
  const colors= tokens(theme.palette.mode);
  
  //for the iconbuttons functionality.
  const [search, setSearch]= useState(false);//search functionality

  const colorMode = useContext(ColorModeContext);//dark and lightmode

  //handles avatar dropdown and states
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const selectItems = [
    {label: 'Apply for a Leave', to: '/leaveapplication' },
    {label: 'Read About Leaves', to: '/leavepolicy' },
  ];
    
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

    const handleSearch = () => {
      setSearch(! search);
    };

    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
      width: 62,
      height: 34,
      padding: 7,
      '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
          color: '#fff',
          transform: 'translateX(22px)',
          '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          },
          '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          },
        },
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
          content: "''",
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
      },
      '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
      },
    }));
    

    return <Box display="flex" justifyContent="space-between" px={{sm:2, xs:0}} py={1}>
    <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
      <Box display="flex" alignItems="center">
        
        <Box display="flex" maxheight="43px" gap={1} pl={{sm:7, xs:1}}>
          <Button
            variant="contained"
            color="error"
            component={RouterLink}
            size="small"
            to="/dashboard"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <GridViewOutlinedIcon />
            <Typography ml={1}>Dashboard</Typography>
          </Button>
          <Button
            variant="text"
            component={RouterLink}
            to="/leaveapplication"
            size="small"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <FeedOutlinedIcon color="info"/>
            <Typography ml={1} color={colors.blueAccent[400]}>Leave Application</Typography>
          </Button>

          <Box minWidth="48px" maxWidth="120px">
          <img src={Logo} style={{height: "auto", width: "100%"}} alt="SasaPay|LMS" />
        </Box>

          <Button
            variant="text"
            component={RouterLink}
            size="small"
            to="/leavetracker"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <HistoryToggleOffOutlinedIcon color="info"/>
            <Typography ml={1} color={colors.blueAccent[400]}>Leave Tracker</Typography>
          </Button>
          <Button
            variant="text"
            component={RouterLink}
            to="/leavepolicy"
            size="small"
            activeClassName="active-button"
            sx={{ borderRadius: '32px', textTransform: 'revert' }}
          >
            <PolicyOutlinedIcon color="info"/>
            <Typography ml={1} color={colors.blueAccent[400]}>Leave Policy</Typography>
          </Button>
        </Box>
    </Box>

    <Box display="flex" alignItems="center">
      <Box display="flex" gap={1} mr={1} maxHeight="2.7em">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? 
          (<DarkModeOutlinedIcon color="primary"/>):(<LightModeOutlinedIcon />)}
        </IconButton>
        
        <Box display="flex" justifyContent="space-between">
          {search && (
          <FormControl size="small">
            <InputLabel>I would like to:</InputLabel>
            <Select
            style={{minWidth: '140px'}}
            label="I would like to:"
            >
              {selectItems.map((selectItem) => (
              <MenuItem
              key={selectItem.label}
              component={RouterLink}
              to={selectItem.to}
              >
              <Typography color={colors.blueAccent[400]}>{selectItem.label}</Typography>
              </MenuItem>
            ))}
            </Select>
          </FormControl>)}

          <IconButton type="button" sx={{p: 1}} onClick={handleSearch}>
            <SearchOutlinedIcon color={theme.palette.mode === 'light' ? "primary": undefined}/>
          </IconButton>
        </Box>
      </Box>
      
      <Chip color="info" icon={<AccountCircleOutlinedIcon />} sx={{cursor: "default"}} label="ani ievn" variant="filled" onDelete={handleClick} deleteIcon={<Tooltip title="Open settings" arrow placement="bottom-end"><ArrowDropDownIcon/></Tooltip>}/>

    </Box>

    <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
        <IconButton>
          <PersonOutlinedIcon color='info'/>
        </IconButton>
        <Typography ml={1} color={colors.blueAccent[400]}>
          Profile
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <IconButton>
          <LogoutOutlinedIcon color='error'/>
        </IconButton>
        <Typography ml={1} color={colors.redAccent[400]}>
          Logout
        </Typography>
          
      </MenuItem>
    </Menu>
  </Box>
    
}

export default Topbar;