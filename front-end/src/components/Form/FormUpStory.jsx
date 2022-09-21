// import {  Button,FormGroup, Label,Input,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
// import React, { useState } from "react";

// import "./formUpStory.css"

// const FormUpStory = (props) => {
//   const [modal, setModal] = useState(false);
//   const toggle = () => setModal(!modal);
//     return ( 
//       <Modal isOpen={modal} fade={false} toggle={toggle}>
//       <ModalHeader toggle={toggle}>
//       <div className="form-up-story-left">
//             <div className="title-form-up-story">
//               <Label for="exampleText"> Home </Label>
//             </div>
//             <div className="avt-form-group">
//             <img
//             className="mx-auto mb-px h-40 w-auto rounded-circle"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhV_YoJ0gNyssnXbp6_t4rgpBKLDvThH_3w&usqp=CAU"
//             alt="Workflow"
//             width={32}
//             height={32}
//             />
//             </div>
//       </div>
//       </ModalHeader>
      
//       <ModalBody>
//       <div className="form-up-story"> 
//         <FormGroup className='form-group'>
          
//           <div className="form-up-story-right">
//             <div className="input-story-text">
//               <Input id="exampleText" name="text" type="textarea" placeholder='Your Story' />
//             </div>

//             <div className="choose-file">
//               <Input id="exampleFile" className="choose-file" name="file" type="file" />
//             </div>
//             <div className="btn-submit">
//             <Button className="btn-submit"> Submit </Button>
//             </div>
//           </div>
//         </FormGroup>
//       </div> 
//       </ModalBody>
//       <ModalFooter>
//         <Button color="primary" onClick={toggle}>
//           submit
//         </Button>{' '}
//         <Button color="secondary" onClick={toggle}>
//           Cancel
//         </Button>
//       </ModalFooter>
//     </Modal>

//      );
// }
 
// export default FormUpStory;