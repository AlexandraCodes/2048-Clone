var GRID = {//PARAMS-- size(input)
    grid: [],
    size: 4,
    // create an empty grid
    grid_empty: function() {
        for (i=0; i < this.size; i++) {
            this.grid[i] = new Array();
            var row = this.grid[i];
            for (j=0; j < this.size; j++) {
                row.push(0);
            }
        }
        //new_grid = this.grid;
        this.check_empty_cells();
        return this.grid;
    },

    empty_cells_array: new Array(),
    //empty cells grabs an array of available positions
    //this initiates the new grid.
    check_empty_cells: function() {

        this.empty_cells_array = [];

        for (var y=0; y < this.size; y++) {
            for ( var x=0; x < this.size; x++) {
                if (this.grid[y][x] == 0) {
                    this.empty_cells_array.push({x:x, y:y});
                }
            }
        }
        //return object {x: x, y: y}
        // return this.choose_random_coordinate(this.empty_cells_array, (Object.keys(this.empty_cells_array).length));
    },

    choose_random_coordinate: function() {
        var chosen = Math.floor(Math.random()*this.empty_cells_array.length);
        return chosen;
    },

    place_tile: function() {
        // var currentGrid = new_grid;
        var obj_empty_coordinates = this.empty_cells_array[this.choose_random_coordinate()];
        var value = Math.floor(Math.random() * 3) + 2;
        this.grid[obj_empty_coordinates.y][obj_empty_coordinates.x] = (value == 3) ? 2 : value;
        // new_grid = currentGrid;
        this.check_empty_cells();
        return this.grid;
    }

};