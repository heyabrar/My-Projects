export const getLocalData = (key) =>{
    try {
        let data = JSON.parse(localStorage.getItem(key));
        return data;
    } catch (error) {
        return null;
    };
};


export const SaveDataLS = (key,value) =>{
    localStorage.setItem(key, JSON.stringify(value))
};
