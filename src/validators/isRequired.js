 
function isRequired(error){
    return(
        function(value){
            if(!value){
                return error
            } 
            else{
                return undefined
            }
        }
    ) 
}

export default isRequired