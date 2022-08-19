import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useContext } from "react";
import { Context } from "../Context/ContextProvider";

export  function MyModal({data,isOpen,setIsopen}) {
    const {cartData,setCartData} = useContext(Context)
    const onClose = ( )=>{
        setIsopen(false)
    }

    const handleAddToCart = (data) =>{
        setCartData([...cartData,
            data
        ]);
        alert(`${data.name} Added To Cart`)
    }
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{data.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             <img className="ModalImage" src={data.image} alt={data.name} />
             <p style={{marginLeft:'110px',marginTop:'10px'}}>Price : ₹ {data.price}</p>
             <p style={{marginLeft:'110px',marginTop:'10px',color:'green'}}>{data.delivery}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue'  mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={( ) =>{handleAddToCart(data)}}>Add To Cart</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }