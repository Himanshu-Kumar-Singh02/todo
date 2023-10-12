import React, { useEffect, useState } from 'react';

const getLocalItems = () => {
    const items = JSON.parse(localStorage.getItem("list"))
    if (items) {
        return items
    } else {
        return [];
    }
}

function Todo() {
    const [data, setData] = useState("");
    const [list, setList] = useState(getLocalItems())
    const [toggle, setToggle] = useState(false);
    const [editId, setEditId] = useState("")

    const addItems = () => {
        const dataobj = { id: new Date().getTime().toString(), name: data }
        if(!data){
         alert("fill the input first!")
        }else if (toggle) {
            setList(
                list.map((ele) => {
                    if (ele.id === editId) {
                        return { ...ele, name: data }
                    }
                    return ele;
                })
            )

            setToggle(false);
            setData("");
        } else {
            setList([...list, dataobj]);
            setData("");
        }

    }

    const editItem = (index) => {
        const editObj = list.find((ele) => {
            return index === ele.id;
        });

        console.log(editObj);
        setData(editObj.name);

        setToggle(true);
        setEditId(index);
    }

    const deleteItem = (index) => {
        const updatedList = list.filter((ele) => {
            return index !== ele.id;
        });

        setList(updatedList);
    }

    const deleteall = () => {
        setList([]);
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    return (
        <>
            <div className='cover'>

                <h1 className='title'>Add your list here! 👍</h1>

                <div className='inputdiv'>
                    <input type="text" placeholder='✍️ add Item...'
                        value={data}
                        onChange={(e) => { setData(e.target.value) }}
                    ></input>
                    {
                        toggle ?
                            <button onClick={addItems}>Edit</button>
                            :
                            <button onClick={addItems}>Add</button>
                    }
                </div>

                <div >
                    {
                        list.map((ele) => {
                            return (
                                <div className='adddiv' key={ele.id}>
                                    <h3>{ele.name}</h3>
                                    <button onClick={() => { editItem(ele.id) }}>Edit</button>
                                    <button onClick={() => { deleteItem(ele.id) }}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='deleteall'>
                    <button onClick={deleteall} >Delete All</button>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default Todo