
function add10(a)
{
    return a+10;
}
function add20(a,b)
{
    return a+b;
}
function add30(a,b,c)
{
    return a+b+c; 
}

console.log("running");
const objContainer={
            add10,
            add20,
            add30,
}
module.exports=objContainer;