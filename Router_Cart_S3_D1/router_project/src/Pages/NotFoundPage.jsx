import {BiCommentError} from 'react-icons/bi'
export default function NotFoundPage ( ){
    return (
        <>
        <div className="dummy"></div>
       <div className="ErrorDiv">
        <div className='ErrorLogoDiv'><BiCommentError/></div>
        <h1>An Error Occured</h1>
        <h1>404 <b style={{color: 'red'}}>Page Not Found</b></h1>
       </div>
        </>
    )
}