// Union operator
// pageNumber can be of type string or of type number
let pageNumberX: string | number = "1";

// Bad practice
// defaults to undefined
let error: string | null;

// Good practice
// explicit default set to null
let error2: string | null = null;

interface UserInterface {
    name: string
    surname: string
}

// User can be a UserInterface or null
// defaults to null
let user: UserInterface | null = null;



// Type Aliases
// Type Aliases for basic types
type ID = string;
interface UserInterface3 {
    id: ID;
    name: string;
    surname: string;
}

// SnakeCase for type name
// easier to read
type PopularTag = string;
const popularTags: PopularTag[] = ["dragon", "banshee"];

// Maybe -> maybe doesn't exist - null
type MaybePopularTag = PopularTag | null;

