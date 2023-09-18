import React,{useState} from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("Enter text")
    
    const handleUpClick=()=>{
        let tex=text.toUpperCase();
        console.log("Uppercase was clicked")
        setText(tex)
        props.showAlert("converted to uppercase",'success')
        }
        const h=(event)=>{
            setText(event.target.value)
    }
    const handlelowClick=()=>{
      let l=text.toLowerCase();
      setText(l);
      props.showAlert("converted to lowercase",'success')
    }
    const handlelsentenceClick=()=>{
      let sentence=text.charAt(0).toUpperCase()+text.slice(1);
      setText(sentence)
      props.showAlert("first latter is captalized",'success')
    }
    const handleCapitaizedwClick=()=>{
      let a=text.split(' ').map((word)=>{
       let b= word.charAt(0).toUpperCase()+word.slice(1);
        return b
       
      }).join(' ');
      setText(a)
      props.showAlert("First letter of a each word get captalized",'success')
      }
      const handlAlterClick=()=>{
        setText(' ')
        props.showAlert("Clear the text",'success')
        
      }
   const handlCopyClick=()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy the text",'success')
   }
    const handlExtraspace=()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showAlert("revoved the extraspaces",'success')
    }
      
    
  return (
    <>
    <div className="conatiner"  style={{color:props.Mode==='dark'?'white':'balck'}}>
        <h1>{props.heading}</h1>
<div className="mb-3" >
  <textarea  className="form-control" id="myBox" rows="8" value={text} onChange={h} style={{backgroundColor:props.Mode==='dark'?'#042743':'white',color:props.Mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handlelsentenceClick}>Sentence case</button>
<button className="btn btn-primary mx-2" onClick={handleCapitaizedwClick}>Captitalized case</button>
<button className="btn btn-primary mx-2" onClick={handlCopyClick}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handlAlterClick}>Clear</button>
<button className="btn btn-primary mx-0 my-2" onClick={handlExtraspace}>Remove Extraspace</button>
    </div>
    <div className='container my-2' style={{color:props.Mode==='dark'?'white':'balck'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}

