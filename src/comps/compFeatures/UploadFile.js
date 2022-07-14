import React, {useState, useContext} from 'react'
import axios from "axios"
import {Button, Form} from "react-bootstrap"

function UploadFile() {
    const [file, setFile] = useState({
      fileName: "uploaded_file",
      file: null,
    });

    const handleInput =(e)=>{
        e.preventDefault()
        setFile({...file, file:e.target.files[0]});
     console.log(file);
   
   
    }
const submitUpload= async (e)=>{
    e.preventDefault()  
    console.log(e);
const formData = new FormData();
    formData.append("fileName", file.fileName)
    formData.append("file", file.file)

const config = {
        headers:{
            accept:'application/json',
           'content-type': 'multipart/form-data'
        }
    }


    console.log("upload submit pressed frontend " , formData);
    await axios
        .post("http://localhost:5001/upload", formData,  
        {headers:{
            accept:'application/json',
           'content-type': 'multipart/form-data'
        }} )
        .then((res)=>{
                console.log(res);
        });
}

  return (
    <div>
      <Form
        onSubmit={(e) => submitUpload(e)}
        action="http://localhost:5001/upload"
        method="post"
        single
        encType="multipart/form-data"
      >
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>select profile pic</Form.Label>
          <Form.Control type="file" onChange={handleInput} name="uploaded_file"/>
          <Button type="submit">submit</Button>
        </Form.Group>
      </Form>
      >
    </div>
  );
}

export default UploadFile