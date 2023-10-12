import React, { useState } from 'react'

function Todo1() {
    const [data, setData] = useState("");
    const [list, setList] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [editId, setEditId] = useState("");

    const addItems = () => {
        if (!data) {
            alert("fill it man first!");
        } else if(toggle){
            setList(
                list.map((ele,ind)=>{
                    if(ind===editId){
                        return data;
                    }
                    return ele;
                })
            )
            setToggle(false);
            setData("")
        } else{
            setList([...list, data]);
            setData("");  
        }
    }

    const deleteItem=(id)=>{
      const updatedList = list.filter((ele,ind)=>{
        return id!==ind;
      });
      setList(updatedList);

    }
    
    const editItem=(id)=>{
      const item = list.find((ele,ind)=>{
        return id===ind;
      });
      setData(item);
      setEditId(id);
      setToggle(true);
    }

    return (
        <>
            <div className='cover' >
                <h1>Add your list here! 👍</h1>
                <div className="inputdiv">
                    <input
                        type="text"
                        placeholder='✍️ add Item...'
                        value={data}
                        onChange={(e) => { setData(e.target.value) }}
                    />

                    {
                        toggle?<button onClick={addItems}>edit</button>:
                        <button onClick={addItems}>add</button>
                    }
                </div>

                {
                   list.map((ele,ind)=>{
                     return(
                        <div className="adddiv" key={ind}>
                            <h2>{ele}</h2>
                            <button onClick={()=>deleteItem(ind)}>del</button>
                            <button onClick={()=>editItem(ind)}>edit</button>
                        </div>
                     );
                   })
                }
            </div>
        </>
    )
}

export default Todo1