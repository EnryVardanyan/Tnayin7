function deepClone(obj){
    if(typeof obj !== "object"){
        return obj
    }
    const descriptors = Object.getOwnPropertyDescriptor(obj)
    const clone = Object.create(Object.getPrototypeOf(obj),descriptors)
    for(key in obj){
        clone[key] = deepClone(obj[key])
    }
    return clone
}
const aPato = {
    name: "Alexandre",
    club: "Sao Paulo",
    currentNum: 12,
    numbers: {
        Milan: 7,
        Chelsea: 11,
        Villarreal: 10,
        InternacionalPA: 11,
        Tianjin_Quanjian: 10
    }
}
console.log(deepClone(aPato))