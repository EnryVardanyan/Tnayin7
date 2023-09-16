function extend(obj, properties){
  for(property in properties){
    const descriptor = properties[property]
    Object.defineProperty(obj, property, descriptor)
  
  }
  return obj
}
const player = {
  name: "Alexandre Pato",
  position: "FW"
}

const club = {
  club: {
    value: "AC Milan",
    enumerable: true,
    configurable: false,
    writable: false
  },
  goals: {
    value: 51,
    enumerable: true,
    configurable: false,
    writable: false
  },
  prime: {
    value: "2008-2011",
    enumerable: true,
    configurable: false,
    writable: false
  },
  trophies_in_club: {
    value: ["Scudetto 2010/11", "Supercup 2011/12", "Golden Boy 2009"],
    enumerable: true,
    configurable: false,
    writable: false
  }
}
console.log(extend(player, club))
