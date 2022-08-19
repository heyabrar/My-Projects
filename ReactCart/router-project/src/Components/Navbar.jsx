import { NavLink} from "react-router-dom"
export default function Navbar( ){
    const Active = {
        textDecoration : 'none',
        color : 'red',
    }

    const NotActive = {
        color : 'black',
        textDecoration : 'none',
    }

    return (
        <div className="navdiv1">
            <div className="navdiv2">
                <p className="running1">GET UPTO 40% OFF ON YOUR FIRST PURCHASE |  WIN EXCLUSIVE CASHBACKS |  SALE IS LIVE NOW | MENS | WOMEN | KIDS</p> 
            </div>
            <div className="navdiv3">
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to="/"><h5>Home</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to='/mens'><h5>Men</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to='/womens'><h5>Women</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to='/Kids'><h5>Kid's</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to="/about_us"><h5>About Us</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to="/faq"><h5>FAQs</h5></NavLink>
            <NavLink style= {({isActive})=>( isActive? Active : NotActive)} to="/cart"><h5>Cart</h5></NavLink>
            </div> 
        </div>
    )
}