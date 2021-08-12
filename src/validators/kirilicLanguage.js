function kirilicLanguage(value){
    if(/[а-яё]/i.test(value)){
        return undefined
    }
    else{
        return 'Используйте кирилицу'
    }
}

export default kirilicLanguage