// Generics

// When no type for obj:
// Parameter 'obj' implicitly has an 'any' type, but a better type may be inferred from usage.
// any is bad, we can do better
// generic -> <T>
const addId = <T>(obj: T) => {
    console.log(typeof obj);
    const id = Math.random().toFixed(16)
    return {
        ...obj,
        id
    }
}
interface UserDetailsInterface {
    name: string;
}


const jack: UserDetailsInterface = {
    name: 'jack'
}

const result = addId<UserDetailsInterface>(jack);
console.log("result", result);