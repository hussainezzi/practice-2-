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

const backspace = () =>{
    setResult(result.slice(0, -1));
}

const calculate try =(){
    setResult()
}

    return(
        <div className = "container">
            <div className =" flex flex-row gap-3">
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>1</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>2</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>3</div>
            </div>


            <div className = "container">
            <div className =" flex flex-row gap-3">
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>1</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>2</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>3</div>
            </div>

            <div className = "container">
            <div className =" flex flex-row gap-3">
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>1</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>2</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>3</div>
            </div>

            <div className = "container">
            <div className =" flex flex-row gap-3">
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>1</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>2</div>
                <div className = "p-3 text-white bg-grey-800 rounded-md border-black-800" onClick  = {handleClick}>3</div>
            </div>

        </div>
    )