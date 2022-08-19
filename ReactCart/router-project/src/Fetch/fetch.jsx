export const MensData = ({page=1,limit=8}) =>{
    return fetch(`http://localhost:3000/mens?_page=${page}&_limit=${limit}`).then((res)=>{
        return res.json( );
    })
}

export const WomensData = ({page=1,limit=8}) =>{
    return fetch(`http://localhost:3000/womens?_page=${page}&_limit=${limit}`).then((res)=>{
        return res.json( );
    })
}

export const KidsData = ({page=1,limit=8}) =>{
    return fetch(`http://localhost:3000/kids?_page=${page}&_limit=${limit}`).then((res)=>{
        return res.json( );
    })
}