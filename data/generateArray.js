function generateArray(inputnumber)
{
    const numberOfLines = inputnumber;
    let board = [];
    let line = [];
    let number = 1;
    for(let i=0;i<numberOfLines;i++)
    {
        for(let j=0;j<numberOfLines;j++)
        {
            line.push(number);
            number++;
        }
        board.push(line);
        line=[];
    }
    board[board.length-1][board[board.length-1].length-1]=null;
    shuffleMultipleArray(board);
    return board;
}

