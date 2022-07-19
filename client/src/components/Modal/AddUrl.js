import React, { useState } from "react";
import { Button, Modal } from 'antd';
import { Input } from 'antd';
const AddUrl = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const[data, setUrl]=useState({
        url:""
    })

    const setLink=(e)=>{
        const { name, value } = e.target;
        setUrl((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
        console.log(data.url)
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async (e) => {
        setIsModalVisible(false);
       

        const{url }=data;
        console.log(url)
        const res=await fetch("/addBookmark",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               url
            })
        })

        const bookmark=await res.json();
        console.log(bookmark);

        if(res.status === 422 || !bookmark){
            alert("error");
            console.log("Error ");
        }else{
            alert(" data added")
            console.log("data addedd")
        }
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    
    };
    

    const addinpdata=async (e)=>{
        
    }
    return (
        <>
            <Button className="m-5" type="primary" onClick={showModal}>
                +
            </Button>
            <Modal title="Add URL" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Url" name="url" value={data.url} onChange={setLink}/>;
            </Modal>
        </>
    )
}

export default AddUrl