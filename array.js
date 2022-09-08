var array = [
    [1,2,3],
    [4,null,6],
    [5,7,8]
]

window.addEventListener("load", displayTable);
function displayTable(){
    var  removetable = document.getElementsByTagName('table')[0];
    removetable.remove();
    var table = document.createElement('table');
    for(let i=0;i<array.length;i++)
    {
        var line = document.createElement("tr");
        for(let j=0;j<array[i].length;j++)
        {
            var cell = document.createElement("th");
            if(array[i][j]!=null)
            {
                var number = document.createTextNode(array[i][j])
                cell.appendChild(number);
                cell.style.fontSize = "xxx-large";  
            }
            cell.style.width='300px';
            cell.style.height='300px';
            cell.addEventListener('click',function(){MoveNumber(i,j)})
            line.appendChild(cell);
        }
        table.appendChild(line);
    }
    document.getElementById('insert-table').appendChild(table);
}

function safe_is_empty_cell(x, y) {
    try {
        var value = array[x][y]
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
    if(array[i,j]!=null)
    {
        if(safe_is_empty_cell(i+1,j))
        {
            array[i+1][j]=array[i][j];
            array[i][j]=null;
        }
        else
        {
            if(safe_is_empty_cell(i-1,j))
            {
                array[i-1][j]=array[i][j];
                array[i][j]=null;
            }
            else
            {
                if(safe_is_empty_cell(i,j+1))
                {
                    array[i][j+1]=array[i][j];
                    array[i][j]=null;
                }
                else
                {
                    if(safe_is_empty_cell(i,j-1))
                    {
                        array[i][j-1]=array[i][j];
                        array[i][j]=null;
                    }
                }

            }
        } 
        displayTable();  
    }
}