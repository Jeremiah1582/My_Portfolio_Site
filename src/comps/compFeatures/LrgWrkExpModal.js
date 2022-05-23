import React, {useState} from 'react'
import { Card, Modal, Form , Button, InputGroup} from "react-bootstrap";
import axios from "axios";

function LrgWrkExpModal({ data, children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 return (
   <div>
     <a href="#" onClick={handleShow}>
       {children}
       {/* display  work experience in large */}
       {/* Modal goes here </div> */}
     </a>

     <div>
       <Modal show={show} onHide={handleClose} dialogClassName="modal-90w">
         <Card>
           <Card.Img src={data.imageLink} />
           <Card.Header closeButton>
             <Card.Title>
               {" "}
               <a href={data.companyLink}>{data.companyName}</a>
               
             </Card.Title>{" "}
             <br />
             <div>{data.position}</div>
             <br />
             <div>
               start date: {data.startDate} <br />
               end date: {data.endDate}
             </div>
           </Card.Header>

           <br />
           <Card.Body>{data.responsibilities}</Card.Body>
           <Card.Footer></Card.Footer>
         </Card>
       </Modal>
     </div>
   </div>
 );
}

export default LrgWrkExpModal