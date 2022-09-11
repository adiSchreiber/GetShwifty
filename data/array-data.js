var arrayNumber = [
    [1,2,3],
    [4,null,6],
    [5,7,8]
]

function getArrayAnswer()
{
    return ParseArrayForChecking(arrayNumber).filter(element=>{return element!=null;}).sort();
}