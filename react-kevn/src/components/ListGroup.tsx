import { useState } from 'react';
import Message from './Message' ;

interface ListGroupProps{
  cities:string[];
  headings:string;
  onSelectItem: (city: string) => void;
}
export default function ListGroup({cities, headings, onSelectItem}: ListGroupProps){

    const getMessage=  cities.length ===0 ?  (<Message/>): null;
    const [selectedIndex, setSelectedIndex ] = useState(-1);
  
    return <>
   
    <h1>{headings}</h1><ul className="list-group">
    {getMessage}
    {cities.map((city, index) => 
    <li 
    className= {selectedIndex=== index ? "list-group-item active" :'list-group-item '} 
    key={city} 
    onClick={()=>{setSelectedIndex(index);
    onSelectItem(city)}}>
        {city}</li>)}
    </ul>
    </>;
}
