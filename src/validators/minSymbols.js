function minSymbol(i){
    return(
        function(value){
            if(value.length < i){
                return `Поле не может содержать менее ${i} символов`
            }
        }
    )
}

export default minSymbol;