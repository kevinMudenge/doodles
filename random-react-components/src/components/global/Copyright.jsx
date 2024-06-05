import {Link} from "react-router-dom";
import {Typography, useTheme} from "@mui/material";

import {tokens} from "../../theme";

export default function Copyright(props) {
    const theme = useTheme();    
    const colors= tokens(theme.palette.mode);
    const myurl= ""
  
    return (
      <Typography variant="h6" color={colors.blueAccent[300]} align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" target="_blank" href={myurl}>
          heart
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }