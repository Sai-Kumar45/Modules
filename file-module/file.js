//Export the function in this file to anothe file by using
//syntax ==> module.exports=function name(to export single function)
//syntax ==>  exports.variablename=functionname(like this we can write to other functions,so we can use the )
var greet = () => console.log("Hello sai!");
module.exports = greet;
