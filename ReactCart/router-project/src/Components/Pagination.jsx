export default function Pagination({current,onChange} ){
   
    const CurrentButton = ( )=>{
        alert(`You Are on Page ${current}`)
    }

    const prev = <button onClick={( ) => onChange (current-1)} disabled={current===1} className="PrevButton">Prev</button>
    const currentPage = <button className="CurrentButton" onClick={CurrentButton}>{current}</button>
    const next = <button onClick={( ) => onChange (current+1)} disabled={current===5} className="NextButton">Next</button>
    return(
        <div className="PaginationDiv">
            {prev}
            {currentPage}
            {next}
        </div>
    )
}