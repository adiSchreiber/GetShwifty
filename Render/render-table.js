function displayTable(){
    var  removetable = document.getElementsByTagName('table')[0];
    if(removetable!=undefined)
    {
        removetable.remove();
    }
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
            }
            cell.className="cell";
            cell.addEventListener('click',function(){
                MoveNumber(i,j);
            });
            line.appendChild(cell);
        }
        table.appendChild(line);
        table.className = getTableClassName();
    }
    document.getElementById('insert-table').appendChild(table);
}

