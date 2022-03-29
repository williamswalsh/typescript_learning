// enumerables

// Old way
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
}

enum StatusEnum {
    // SnakeCase
    NotStarted,
    InProgress,
    Done
}

enum StatusWithString {
    // SnakeCase
    NotStarted = "no started",
    InProgress = "InProgress",
    Done = "Done"
}


const notStartedStatus: StatusEnum = StatusEnum.NotStarted;

// Can assign string to enum
// Type '"foo"' is not assignable to type 'Status'.
// const testStatus: Status = 'foo';
