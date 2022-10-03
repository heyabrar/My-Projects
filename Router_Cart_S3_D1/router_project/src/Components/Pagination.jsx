import {MdNavigateNext} from 'react-icons/md'
import {GrFormPrevious} from 'react-icons/gr'
import { useContext } from 'react'
import { UserContext } from '../Context/AuthContext'

export default function Pagination ({current,onChange,totalPage}) {
    const {theme} = useContext(UserContext)
    const sty = {
        light : {
            color : 'black',
            backgroundColor : 'white'
        },
        dark : {
            color : 'white',
            backgroundColor : 'white'
        },
        nextBtn : {
            color : 'black',
            backgroundColor : 'white'
        }
    };

    const Prev = <button onClick={( )=> onChange(current -1)} disabled={current===1} className='PreviousButton' style={theme ==='light' ? sty.light : sty.dark}>{<GrFormPrevious/>}</button>
    const CurrentPage = <button>{current}</button>
    const Next = <button onClick={( )=> onChange(current+1)} disabled={current=== Math.ceil(totalPage/8)} className='NextButton' style={theme ==='light' ? sty.light : sty.nextBtn}>{<MdNavigateNext/>}</button>

    return (
    <>
    <div className='PaginationDiv'>
         {Prev}
         {Next}
    </div>
    </>
    )

}