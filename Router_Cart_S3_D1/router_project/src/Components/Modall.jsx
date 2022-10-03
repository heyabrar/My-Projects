import { Button,Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "../Context/AuthContext"
import ToastExample from "./Toast";
// import { useContext} from "react";

export default function MyModal({data,isOpen,setIsopen}) {
  const {AddToCart,SetAddToCart} = useContext(UserContext);
    const onClose = ( ) =>{
        setIsopen(false)
    };
    
    const handleAddToCart = (data) =>{
      SetAddToCart([...AddToCart,data]);
    };

    return (
      <>  
        <Modal isOpen={isOpen} onClose={onClose} className='TotalModal'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data.name} ({data.category})</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <div className="ModalContentDiv">
                    <img src={data.image} alt={data.name} />
                    <h4>{data.name}</h4>
                    <p> ₹ {data.price}</p>
                    <p style={{color :'green'}}>{data.delivery}</p>
               </div>
            </ModalBody>
  
            <ModalFooter>
              <Button bgColor={'rgba(197, 194, 194, 0.6);'} mr={3} onClick={onClose}>
                Close
              </Button>
             <p onClick={( )=> handleAddToCart(data)}><ToastExample/></p>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }