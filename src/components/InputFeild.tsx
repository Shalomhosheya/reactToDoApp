import React from 'react'
import "./style.css"
interface props{
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputFeild = ({todo,settodo}:props) => {
  return (
    <form className='input'>
      <input type="text" placeholder="Enter your task" className='input__box'/>
      <button className="input__submit"type="submit">GO</button>
    
     </form>
  )
}

export default InputFeild
