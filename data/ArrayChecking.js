function ParseArrayForChecking(array)
{
    let checkArray = [];
    for (let i=0;i<array.length;i++)
    {
        for (let j=0;j<array.length;j++)
        {
            checkArray.push(array[i][j]);
        }
    }
    return checkArray;
}

function getCountOfOppositeInBoard(array)
{
    let checkArray = ParseArrayForChecking(array);
    let countOfOpposite = 0;
    for (let i=0;i<checkArray.length;i++)
    {
        for(let j=i+1;j<checkArray.length;j++)
        {
            if((checkArray[i]!=null)&&(checkArray[j]!=null))
            {
                if(checkArray[i]>checkArray[j])
                {
                    countOfOpposite++;
                }
            }
            
        }
    }
    return countOfOpposite;
}

function getLineIndexOfNull(array)
{
    for (let i=0;i<array.length;i++)
    {
        for (let j=0;j<array.length;j++)
        {
            if(array[i][j]==null)
            {
                return i+1;
            }
        }
    }
}

function getLegalBoard()
{
    const inputNumber = getInputLinesNumber();
    let array = generateArray(inputNumber);
    let numOfOpposite = getCountOfOppositeInBoard(array);
    let isLegal = false;
    while(!isLegal)
    {
        if(array[0].length%2>0)
        {
            if(numOfOpposite%2==0)
            {
                isLegal=true;
            }
            else
            {
                array = generateArray(inputNumber);
                numOfOpposite = getCountOfOppositeInBoard(array);
            }
        }
        else
        {
            if((numOfOpposite+getLineIndexOfNull(array))%2==0)
            {
                isLegal=true;
            }
            else
            {
                array = generateArray(inputNumber);
                numOfOpposite = getCountOfOppositeInBoard(array);
            }
        }
    }
    return array;
}