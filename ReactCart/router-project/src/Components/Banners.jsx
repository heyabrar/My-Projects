import { NavLink} from 'react-router-dom'
export default function Banners( ){
    return (
        <div className="maindiv">
            <div className='bannerdiv'>
              <NavLink  to='/mens'><img  className='bannerimg' src="https://img.freepik.com/free-psd/fashion-show-horizontal-banner_23-2148911175.jpg?w=2000" alt="banner" /><button className='shopNow'>Shop Now</button></NavLink>
              <NavLink  to='/womens'><img className='bannerimg' src='https://img.freepik.com/free-vector/fashion-sale-banners-with-photo_52683-9828.jpg?w=2000' alt="banner" /><button className='shopNow'>Shop Now</button></NavLink>
              <NavLink  to='/kids'><img className='bannerimg' src="https://img.freepik.com/free-psd/pediatric-care-concept-banner-style_23-2148581516.jpg?w=2000" alt="banner" /><button className='shopNow'>Shop Now</button></NavLink>
        </div>
        </div>
    )
}