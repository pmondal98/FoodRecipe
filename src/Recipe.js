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
               <h5 style={{border: '1px solid black', borderBox : 'border-box'}}>Calorie Count :- {calories.toFixed(2)}</h5>              
            </div>
            <div className="card-footer">
            <Button onClick={handleShow} 
            style={{backgroundImage: 'linear-gradient(60deg, #abecd6 0%, #fbed96 100%)',outline: 'none',border: 'none', color: 'black', fontWeight: 'bold'}}>
               See Ingredients
            </Button>            
            </div>

            <Modal show={show} onHide={handleClose} centered={true}>
               <Modal.Header closeButton>
                  <Modal.Title>{title}</Modal.Title>
               </Modal.Header>
               <Modal.Body scrollable={true}>
                  <ul className="card-text">
                     {ingredients.map(ingredient =>(                     
                     <li>
                        {ingredient.text}
                     </li>
                     ))}
                  </ul>  
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