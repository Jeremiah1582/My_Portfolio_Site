import React, {useState, useContext} from 'react'
import axios from "axios"
import {Button, Form} from "react-bootstrap"

function UploadFile() {
 

    const [file, setFile] = useState({
      file: null,
    });

    const handleInput =(e)=>{
        e.preventDefault()
        setFile({ ...file, file: e.target.files[0] });
     console.log(file);

   
   
    }
const submitUpload= async (e)=>{
    e.preventDefault()  
    console.log(e);
const formData = new FormData();
    formData.append("uploaded_file", file.file);


    console.log("upload submit pressed frontend " , formData);
    await axios
      .post("http://localhost:5001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
}

  return (
    <div>
      <Form
        onSubmit={submitUpload}
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