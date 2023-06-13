import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App(){
  let cities = [    
    'Nairobi',
    'Naivasha',
    'Sudah',   
  ];
  const[alertvisible,setalertvisible] =useState(false);

  const handleSelect=(city: string)=>{
    alert('hi');
  }
   return <>
  <ListGroup cities={cities} headings="cities" onSelectItem={handleSelect}/>
  {alertvisible && <Alert>Mwah</Alert>}
  
 
  <Button children="My Button" color='primary' onClick={()=> setalertvisible(true)}/>
  </> 
}
export default App;