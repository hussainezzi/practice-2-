// i write the code ot make a calculator plz assis me to make it 
import React , {useState} from 'react';
// why are we importing app.csss??
import './App.css';


export default function Calculator(){
    const [result , setResult ] = useState("");
    const handleClick  = (e) =>{
        setResult(result.concat(e.target.name))
    }
}

const clear = () =>{
    setResult("");
}