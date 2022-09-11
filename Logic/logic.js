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
