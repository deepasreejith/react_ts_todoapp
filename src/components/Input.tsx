type Input = {
    type:"text"|"checkbox"|"color";
    inputValue:string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>;
}

function Input({type,inputValue,setInputValue}:Input) {
  return (
    <div>
       <input type={type} className='bg-slate-500 w-full p-2 rounded-sm mb-2' onChange={(event)=> setInputValue(event.target.value)} value={inputValue}></input>
    </div>
  )
}

export default Input
