import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Card, Button, Figure } from "react-bootstrap";
import axios from "axios";

function RemoveExpButton(props) {
  const {user} = useContext(UserContext);
  
  const speak =()=>{
      console.log("remove button licked ");
  }

  return (
    <div>
      <Button onCLick={speak} >{props.children}</Button>
    </div>
  );
}

export default RemoveExpButton;
