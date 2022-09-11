function shuffleSingleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function shuffleMultipleArray(array)
{
    for (var i = 0; i<array.length; i++)
    {
        shuffleSingleArray(array[i])
    }
}


