// enumerables
// Old way
var statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
var StatusEnum;
(function (StatusEnum) {
    // SnakeCase
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
var StatusWithString;
(function (StatusWithString) {
    // SnakeCase
    StatusWithString["NotStarted"] = "no started";
    StatusWithString["InProgress"] = "InProgress";
    StatusWithString["Done"] = "Done";
})(StatusWithString || (StatusWithString = {}));
var notStartedStatus = StatusEnum.NotStarted;
// Can assign string to enum
// Type '"foo"' is not assignable to type 'Status'.
// const testStatus: Status = 'foo';
