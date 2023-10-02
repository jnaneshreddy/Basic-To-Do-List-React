import React, { useState } from 'react'
import './index.css';

const Pract = () => {
    const [editingitem,seteditingitem] = useState({
        id:"",
        isEditing:false
    });

   
    const [message,setmassage] = useState({
        Text:"",
        id:""
    });

    const [list,setlist] = useState([]);

            
    const changemessage = (e) =>{
        setmassage({
            ...message,
            Text:e.target.value,
        })
    };
    const submithandle = (e) => {
        e.preventDefault();
        let Newtodo = {
            Text:message.Text,
            id:new Date().getTime().toString()
        };
       setlist([...list,Newtodo])
       setmassage({
        Text:"",
        id:"",
       })
    }

    const handledelete = (id) =>{
      let Newtodos = list.filter((eachItem)  =>{
        return eachItem.id !== id;
      })
        setlist(Newtodos);

    }

    const changeEditState = (id) =>{
        seteditingitem({
            ...editingitem,
            id:id,
            isEditing:true,
           
    });
    let editableitem = list.find((eachItem)=>eachItem.id === id); 
    setmassage(
        {
            ...message,
            Text:editableitem.Text,
            id:editableitem.id,
    })
    }

    const handleEdit = (e) =>{
        e.preventDefault();
        let Newtodos = list.map((eachItem)=>{
            if (eachItem.id === editingitem.id){
                return{
                    Text:message.Text,
                    id:editingitem.id
                }

            }else{
               return eachItem;
            }
        })
        setlist(Newtodos);
        setmassage({
            Text:"",
            id:""
        })
        seteditingitem({
            id:"",
            isEditing:false,
        })
    }


  return (
    <div className='maindiv'>
     <form>
        <input type="text"
        name='message'
        id='message'
        placeholder='Enter some massege'
        value={message.Text}
        onChange={changemessage}
        className='textbox1'
         />
         {
            editingitem.isEditing ? (
                <button
                name='addbutton'
                id='addbutton'
                className='addbutton'
                onClick={handleEdit}
                >
                  Edit
                </button>
            ) : (<button
                name='addbutton'
                id='addbutton'
                className='addbutton'
                onClick={submithandle}
                >
                   Add Items
                </button>

            )
             
         }
      
      
        
     </form>
     <hr className='ruler' />
     {
        list.length===0 && <h4>There Is No Items In List</h4>
     }
     <ul className='list'>

        {           
              list.map((eachItem) => {
                const {Text,id} = eachItem;
                return<li>
                    <span>{Text}</span>{'\t'}{'\t'}{'\t'}
                    <button className='btnedit' onClick={() =>changeEditState(id)}>Edit</button>
                    <button className='btndlt' onClick={() => handledelete(id)}>Delete</button>
               </li>
            })
        }
      
     </ul>
     
    </div>
  )
}

export default Pract;   
