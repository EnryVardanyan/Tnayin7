function reveredString(s){
    try{
        const result = s.split('').reverse().join("")
        return result
    } catch(error){
        return error.message
    }
}
console.log(reveredString(555))