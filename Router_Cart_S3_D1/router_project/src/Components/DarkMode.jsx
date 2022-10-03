import { FormControl, Switch } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";

export default function DarkMode ( ){
    const {toggleTheme} = useContext(UserContext)
    return (
        <>
        <FormControl display='flex' alignItems='center' className="DarkMode" width={'50px'}>
            <Switch onChange={toggleTheme} id='email-alerts' className="Switch" />
        </FormControl>
        </>
    )
}