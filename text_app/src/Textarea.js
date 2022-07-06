import React,{useState} from 'react'

export default function Textarea(props) {
  
  const handleUpClick=()=>{
    if(text.length>=1){
      let newText=text.toUpperCase();
      setText(newText);
    }
    else{
      window.alert("Please Enter some words")
    }
  }
  const handleLoClick=()=>{
    if(text.length>=1){
      let newText=text.toLowerCase();
      setText(newText);
    }
    else{
      window.alert("Please Enter some words")
    }
      }
  const handleClearClick=()=>{
    if(text.length>=1){
      let newText='';
      setText(newText);
    }
    else{
      window.alert("Please Enter some words")
    }
  }
  const handleReplaceClick=()=>{
    if(text.length>=1){
      let repWord=prompt("Enter the word to be replaced ");
      let toReplace=prompt("Enter the word that you want to replace with :)");
      let newText=text.replace(repWord,toReplace);
      setText(newText);
    }
    else{
      window.alert("Please Enter some words")
    }
  }
  const handleExtractNumber=()=>{
    if(text.length>=1){
      const  extNumber=/[0-9//]/g;
      const digits=text.match(extNumber);
      let newText=digits.join('');
      setText(newText);
      
    }
    else{
      window.alert("Please Enter some words")
    }
  }
  const handleCapital=()=>{
    if(text.length>=1){
      const words=text.split(" ");
      let upperCaseWord=' ';
      words.forEach(element=>{
        upperCaseWord+=element.charAt(0).toUpperCase()+element.slice(1)+" "
      });
      setText(upperCaseWord);
    }
    else{
      window.alert("Please Enter some words")
    }
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  
  const[text,setText]=useState('');
  return (
    <div>
      
      <h1>{props.heading}</h1>
      <div class="mb-3">
      
  <textarea class="form-control my-3" value={text} placeholder='Enter Your Text and See the magic :) Made by Tanmay Dutta ' onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
 <button className='btn- btn-outline-primary my-2 ' onClick={handleUpClick}>Convert to  Uppercase </button>
 <button className='btn- btn-outline-primary my-2 mx-4' onClick={handleLoClick}>Convert to  Lowercase </button>
  <button className='btn- btn-outline-primary my-2 mx-3' onClick={handleReplaceClick}>change word </button>
 <button className='btn- btn-outline-primary my-2 mx-2' onClick={handleExtractNumber}>Extract Numbers</button>
 <button className='btn- btn-outline-primary my-2 mx-2' onClick={handleCapital}>Capitalization</button>
 <button className='btn- btn-outline-primary my-2 mx-1' onClick={handleClearClick}>Clear</button>

 <div className='container my-2'>
      <h1>Your text Summery is  ---> {text.split(" ").length-1} Words and {text.length} Characters</h1>
     
    </div>
    </div>
    
  )
}
