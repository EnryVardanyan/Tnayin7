class Immutable {
    constructor(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                Object.defineProperty(this, key, {
                    get() {
                        return obj[key];
                    },
                    set() {
                        throw new Error("Properties cannot be modified");
                    },
                    enumerable: true
                });
            }
        }
    }
}

let immutable = new Immutable({
    name: "Enry Vardanyan",
    age: 23
});
console.log(immutable)
console.log(immutable.name)
immutable.name = "Alexandre Pato"