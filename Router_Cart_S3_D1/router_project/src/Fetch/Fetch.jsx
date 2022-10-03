export const getDataForHome = ( ) =>{
    return fetch ('https://aqueous-caverns-37022.herokuapp.com/mens?_limit=5')
    .then((res)=>{
        return res.json( );
    })
};

export  const getDataForHomeWomens =( )=>{
    return fetch(`https://aqueous-caverns-37022.herokuapp.com/womens?_limit=5`)
    .then((res)=>{

        return res.json( );
    })
};

export  const getDataForHomeKids =( )=>{
    return fetch(`https://aqueous-caverns-37022.herokuapp.com/kids?_limit=5`)
    .then((res)=>{
        return res.json( );
    })
};

export const GetMensPageData = (page=1,SetTotalPage) =>{
    return fetch(`https://aqueous-caverns-37022.herokuapp.com/mens?_page=${page}&_limit=8`)
    .then((res)=>{
        SetTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
};

export const GetWomensPageData = (page=1,setTotalPage) =>{
    return fetch(`https://aqueous-caverns-37022.herokuapp.com/womens?_page=${page}&_limit=8`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
};

export const GetKidsPageData = (page=1,setTotalPage) =>{
    return fetch(`https://aqueous-caverns-37022.herokuapp.com/kids?_page=${page}&_limit=8`)
    .then((res)=>{
        setTotalPage(Number(res.headers.get('X-Total-Count')))
        return res.json( );
    })
};