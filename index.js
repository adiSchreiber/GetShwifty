//const fontSize = "xxx-large"

window.addEventListener("load", ()=>{
    shuffleMultipleArray(arrayNumber);
    displayTable();
    document.getElementById('answer-button').addEventListener('click', getAnswer);
});


function displayTable(){
    var  removetable = document.getElementsByTagName('table')[0];
    removetable.remove();
    var table = document.createElement('table');
    for(let i=0;i<arrayNumber.length;i++)
    {
        var line = document.createElement("tr");
        for(let j=0;j<arrayNumber[i].length;j++)
        {
            var cell = document.createElement("th");
            if(arrayNumber[i][j]!=null)
            {
                var number = document.createTextNode(arrayNumber[i][j])
                cell.appendChild(number);
                //cell.style.fontSize = fontSize;  
            }
            cell.className="cell";
            //setStyleOfCell(cell);
            cell.addEventListener('click',function(){MoveNumber(i,j)})
            line.appendChild(cell);
        }
        table.appendChild(line);
    }
    table.className = "table";
    document.getElementById('insert-table').appendChild(table);
}

function isEndOfGame(array)
{
    endArray = [[1,2,3],[4,5,6],[7,8,9]]
    if(arrayNumber==endArray){}
}