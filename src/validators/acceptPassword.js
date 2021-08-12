function acceptPassword(value,allValues){
    if(value === allValues.password){
        return undefined
    }else{
        return "Пароли не совпадают"
    }
}

export default acceptPassword