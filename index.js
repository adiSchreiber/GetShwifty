//const fontSize = "xxx-large"

window.addEventListener("load", ()=>{
   // shuffleMultipleArray(arrayNumber);
    //displayTable();
    document.getElementById('answer-button').addEventListener('click', getAnswer);
    document.getElementById('generateButton').addEventListener('click', generateNewBoard);
});


function generateNewBoard()
{
    arrayNumber = getLegalBoard();
    displayTable();
}
// function displayTable(){
//     var  removetable = document.getElementsByTagName('table')[0];
//     removetable.remove();
//     var table = document.createElement('table');
//     for(let i=0;i<arrayNumber.length;i++)
//     {
//         var line = document.createElement("tr");
//         for(let j=0;j<arrayNumber[i].length;j++)
//         {
//             var cell = document.createElement("th");
//             if(arrayNumber[i][j]!=null)
//             {
//                 var number = document.createTextNode(arrayNumber[i][j])
//                 cell.appendChild(number);
//             }
//             cell.className="cell";
//             cell.addEventListener('click',function(){
//                 MoveNumber(i,j);
//             });
//             line.appendChild(cell);
//         }
//         table.appendChild(line);
//     }
//     if(isEnd())
//     {
//         table.className="answerTable";
//     }
//     else
//     {
//         table.className = "table";
//     }
//     document.getElementById('insert-table').appendChild(table);
// }

