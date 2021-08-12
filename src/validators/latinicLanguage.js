function latinicLanguage(value){
    if(/^\s*(\w+)\s*$/.test(value)){
        return undefined
    }
    else{
        return 'Используйте латинские буквы'
    }
}

export default latinicLanguage