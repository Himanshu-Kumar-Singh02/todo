import React, { useEffect, useState } from 'react';

const getList = () => {
    const updatedList = JSON.parse(localStorage.getItem("lists"));
    return updatedList
}

function Todo2() {
    const [data, setData] = useState("");
    const [list, setList] = useState(getList());
    const [editId, setEditId] = useState("");
    const [toggle, setToggle] = useState(false);

    const AddItems = () => {
        const ele = { id: new Date().getTime().toString(), name: data };

        if (!data) {
            alert("Please fill the data first!");
        } else if (toggle) {
            const updateList = list.map(ele=>{
                if(ele.id===editId){
                    return {...ele.id,name:data};
                }
                return ele;
            });
            setList(updateList);
            setData("");
            setToggle(false);
        } else {
            setList([...list, ele]);
            setData("");
        }
    }

    const deleteItem = (id) => {
        const newList = list.filter((ele) => {
            return ele.id !== id;
        });
        setList(newList);
    }

    const editItem = (id) => {
        const item = list.find((ele) => {
            return ele.id === id;
        })
        setData(item.name);
        setEditId(item.id);
        setToggle(true);
    }

    const deleteItems = () => {
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(list));
    }, [list]);

    useEffect(()=>{
      if(!data){
        setToggle(false);
      }
    },[data])

    return (
        <>
            <div className='cover'>
                <h1>Add your List Here! 👍</h1>
                <div>
                    <input
                        type='text'
                        placeholder='✍️ add Item...'
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    {toggle ? <button onClick={AddItems} >Edit</button> :
                        <button onClick={AddItems} >Add</button>}
                </div>

                <div>
                    {
                        list.map((ele) => {
                            return (
                                <div className='adddiv' key={ele.id}>
                                    <h2>{ele.name}</h2>
                                    <button onClick={() => deleteItem(ele.id)}>delete</button>
                                    <button onClick={() => editItem(ele.id)}>Edit</button>
                                </div>
                            )
                        })
                    }
                    <button onClick={deleteItems}>Delete All</button>
                </div>
            </div>
        </>
    )
}

export default Todo2