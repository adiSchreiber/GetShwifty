function safe_is_empty_cell(x, y) {
    try {
        var value = arrayNumber[x][y]
        if ((value == null)&&(typeof value!='undefined'))
        {
            return true;
        }
        else
        {
            return false
        }
    }
    catch(err) {
        return false;
    }
}
function MoveNumber(i,j){
    if(arrayNumber[i,j]!=null)
    {
        if(safe_is_empty_cell(i+1,j))
        {
            arrayNumber[i+1][j]=arrayNumber[i][j];
            arrayNumber[i][j]=null;
        }
        else
        {
            if(safe_is_empty_cell(i-1,j))
            {
                arrayNumber[i-1][j]=arrayNumber[i][j];
                arrayNumber[i][j]=null;
            }
            else
            {
                if(safe_is_empty_cell(i,j+1))
                {
                    arrayNumber[i][j+1]=arrayNumber[i][j];
                    arrayNumber[i][j]=null;
                }
                else
                {
                    if(safe_is_empty_cell(i,j-1))
                    {
                        arrayNumber[i][j-1]=arrayNumber[i][j];
                        arrayNumber[i][j]=null;
                    }
                }

            }
        } 
        displayTable();  
    }
}

function getAnswer()
{
    arrayNumber = answerArray;
    displayTable();
}

function isEqualArray(firstArray, SecondArray)
{
    if(firstArray.length!=SecondArray.length)
    {
        return false;
    }
    for(let i=0;i<firstArray.length;i++)
    {
        if(firstArray[i]!=SecondArray[i])
        {
            return false;
        }
    }
    return true;
}

function isEnd()
{
    const endArray = getArrayAnswer(); 
        const currentArray = ParseArrayForChecking(arrayNumber).filter(element=>{return element!=null;});
    if(isEqualArray(endArray, currentArray))
    {
        return true;
    }
    return false;
}
