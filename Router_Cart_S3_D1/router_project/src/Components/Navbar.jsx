import { NavLink} from 'react-router-dom'
import DarkMode from './DarkMode'

export default function Navbar ( ){
    const Active = {
        color : 'rgb(220, 152, 152)',
    };

    const NotActive = {
        color : 'black',
    };

    return (
        <>
        <div className='NavOutterDiv'>
            <div className='NavDiscountDiv'>
                <p className='NavDiscountP'>GET UP 30% OFF ON YOUR FIRST PURCHASE DROP IS LIVE | MEN | WOMEN | KIDS</p>
            </div>
           <div className='NavDiv'>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/'} end>Home</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/mens'}>Men</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/womens'}>Women</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/kids'}>Kid's</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/aboutus'}>About Us</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/cart'}>Cart</NavLink>
                <NavLink style={({isActive})=>(isActive ? Active : NotActive)} to={'/login'}>Log In</NavLink>
                <DarkMode/>
           </div>
        </div>
        </>
    )
}