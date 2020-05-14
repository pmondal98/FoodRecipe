import React,{useState} from 'react';
import { Button, Modal} from 'react-bootstrap';


const Recipe=({title,calories,image, ingredients})=>{

   const [show, setShow] = useState(false);
 
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return( 

        <div className="card">
         <img className="card-img-top" src={image} alt={title}/>
            <div className="card-body">
               <h3 className="card-title">{title}</h3>  
              <h5>Calorie Count :- {calories.toFixed(2)}</h5>              
            </div>
            <div className="card-footer">
            <Button variant="primary" onClick={handleShow}>
               See Ingredients
            </Button>            
            </div>    

            <Modal show={show} onHide={handleClose} centered={true}>
               <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
               </Modal.Header>
               <Modal.Body scrollable={true}>
                  <ol className="card-text">
                     {ingredients.map(ingredient =>(                     
                     <li>
                        {ingredient.text}
                     </li>
                     ))}
                  </ol>  
               </Modal.Body>
               <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
               </Button>               
               </Modal.Footer>
            </Modal>           

         </div> 
   )   
}
 
export default Recipe