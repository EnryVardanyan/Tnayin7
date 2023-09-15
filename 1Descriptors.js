const obj = {
    _name : "",
    set name(n){
        this._name = n
    },
    get name(){
        return this._name.split(", ").map(everyName => [everyName, everyName.length])
    }
};
obj.name = "Hamlet, Artavazd";
console.log(obj.name); 