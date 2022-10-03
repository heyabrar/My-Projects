import {Button, useToast} from '@chakra-ui/react'
export default function ToastExample() {
    const toast = useToast()
    return (
      <Button
        onClick={() =>
          toast({
            title: 'Item Sucessfully Added',
            description: "You can check it out in cart later",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        }
      >
        Cart
      </Button>
    )
  }