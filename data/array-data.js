var arrayNumber = [];

function getArrayAnswer()
{
    let lineLength = arrayNumber[0].length;
    let flatArray = ParseArrayForChecking(arrayNumber).filter(element=>{return element!=null;}).sort();
    const answer = [];
    indexFlat = 0;
    for(let i=0; i<lineLength;i++)
    {
        let line = [];
        for(let j=0; j<lineLength;j++)
        {
            line.push(flatArray[indexFlat]);
            indexFlat++;
        }
        answer.push(line);  
    }
    return answer;
}