// Variables
{
    var a = "1";
    console.log('a', a);
}
// Functions
{
    var getFullName = function (name, surname) { return name + " " + surname; };
    console.log(getFullName("Samuel", "Fontes"));
}
// Interface
{
    var user = {
        name: "samuel",
        age: 30,
        getMessage: function () {
            return "Hello ".concat(this.name);
        }
    };
    var user2 = {
        name: "jack",
        getMessage: function () {
            return "Hello ".concat(this.name);
        }
    };
    console.log(user.getMessage());
}
// Type alias & Union
{
    var popularTags = ["tag1", "tag2"];
    var dragonsTag = "Dragon";
    var user = null;
    var username = "samuel";
    var pageName = 1;
    var errorMessage = null;
}
// void, any, never
var doSomething = function () {
    console.log("doSomething");
};
var doNotDoThis = "this is just like javascript";
doNotDoThis = false;
var doNever = function () {
    throw "never?";
};
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
//let s2:string = vUnknown;
console.log(s1);
