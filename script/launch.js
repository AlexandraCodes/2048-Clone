function generateId()
{
    var grid_cells = document.getElementsByClassName("grid_cells");
    var j = 0;
    for (var i=0; i < grid_cells.length; i++)
    {
        if (j == 4)
        {
            j = 0;
        }
        grid_cells[i].id = Math.floor(i / 4) + "" + j;
        j++;
    }
}

document.addEventListener("DOMContentLoaded", function()
{

    generateId();
    var GRRR = Object.create(GAME_MANAGER);
    GRRR.Start_Game();

});