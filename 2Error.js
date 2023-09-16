function isPositive(num){
    if(num > 0) return "Yes"
    else if(num === 0) throw new Error("Zero Error")
    else throw new Error("Negative number")
}
console.log(isPositive(0))