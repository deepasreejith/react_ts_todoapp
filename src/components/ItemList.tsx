import { Items, ReactsetState } from "../types/utils";
import Button from "./Button"
import { MdDelete } from "react-icons/md";
type ItemList = {
    items:Items[];
    setItems:ReactsetState<Items[]>
}

function ItemList({items,setItems}:ItemList) {
    const handleDelete = (id:string) =>{
        setItems((prev)=> prev.filter((data) =>data.id !== id))
      }
  return (
    
       items.map((data) => (
        <div key={data.id} className='flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2'>
        <p>{data.title}</p>
       
        <Button onClick={()=>handleDelete(data.id)}>
        <MdDelete />
        </Button>
      </div>
       ))
   
  )
}

export default ItemList
