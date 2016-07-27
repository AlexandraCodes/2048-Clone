var GAME_MANAGER = {
    GridIronGang: Object.create(GRID),

    Start_Game: function() {

        var inputManager = Object.create(INPUT);
        inputManager.init();

        this.GridIronGang.grid_empty();

        this.GridIronGang.place_tile();
        this.GridIronGang.place_tile();

        return this.Display_Grid();
    },

    Display_Grid: function()
    {
        for (var i=0; i < this.GridIronGang.grid.length; i++) {
            for (var j=0; j < this.GridIronGang.grid[i].length; j++) {
                if (this.GridIronGang.grid[i][j] !== 0) {
                 var tile = Object.create(TILE);
                 tile.spawn_tiles(j, i, this.GridIronGang.grid[i][j]);
                }
            }
        }
        this.GridIronGang.check_empty_cells();
        this.GridIronGang.place_tile();
    },

    Remove_Nodes: function(actual_playing_grid) {
        for (var i = 0; i < actual_playing_grid.length; i++) {
            for (var j = 0; j < actual_playing_grid[i].length; j++) {
                if (actual_playing_grid[i][j] === 0) {
                    var location = document.getElementById(i+""+j);
                    while (location.firstChild) {
                        location.removeChild(location.firstChild);
                    }
                }
            }
        }
    },

    moveUp: function() {
        var len = this.GridIronGang.grid.length;

        for (var i = len-1; i >= 0; i--) {
            for (var j=0; j < this.GridIronGang.grid.length; j++) {
                var y = (i - 1 < 0) ? 0 : i - 1;
                var val = this.GridIronGang.grid[i][j];

                if (i != 0) {
                    if (val != 0) {
                        if (this.GridIronGang.grid[y][j] == 0) {
                            this.GridIronGang.grid[y][j] = val;
                        } else {//if it has a tile in it
                            if (this.GridIronGang.grid[y][j] == this.GridIronGang.grid[i][j]) {
                                this.GridIronGang.grid[y][j] = ((this.GridIronGang.grid[i][j]) * 2);
                            } else {
                                continue;
                            }
                        }
                    } else {continue;}
                    this.GridIronGang.grid[i][j] = 0;
                }
            }
        }

        this.Remove_Nodes(this.GridIronGang.grid);
        this.Display_Grid();
    },

    moveDown: function() {
        var grid = this.GridIronGang.grid;
        var rowLength = this.GridIronGang.grid[0].length;
        var self = this;

        Object.keys(this.GridIronGang.grid).map(function(value, index) {
            for (var i = 0; i < rowLength; i++) {
                for (var x = 0; x < rowLength; x++) {
                    if (self.GridIronGang.grid[index][x] != 0) {
                        self.GridIronGang.grid[index + 1][x] = self.GridIronGang.grid[index][x];
                        self.GridIronGang.grid[value][x] = 0;
                    }
                }
            }
        });

        this.Remove_Nodes(this.GridIronGang.grid);
        this.GridIronGang.place_tile();
        this.Display_Grid(this.GridIronGang);
    },

    moveLeft: function() {
/*
        var len = this.GridIronGang.grid.length;
        var y, val;

        for (var i = len-1; i > -1; i--) {
            for (var j=0; j < this.GridIronGang.grid.length; j++) {
                y = (i - 1 < 0) ? 0 : i - 1;
                val = this.GridIronGang.grid[i][j];

                if (i != 0) {
                    if (val != 0) {
                        if (this.GridIronGang.grid[y][j] == 0) {
                            this.GridIronGang.grid[y][j] = val;
                        } else {//if it has a tile in it
                            if (this.GridIronGang.grid[y][j] == this.GridIronGang.grid[i][j]) {
                                this.GridIronGang.grid[y][j] = ((this.GridIronGang.grid[i][j]) * 2);
                            } else {
                                continue;
                            }
                        }
                    } else {continue;}
                    this.GridIronGang.grid[i][j] = 0;
                }
            }
        }
*/
        var len = this.GridIronGang.grid.length;

        for (var y=0; y < len; y++) {
            for (var x=0; x < this.GridIronGang.grid[y].length; x++) {

                var i = (x + 1 == 4) ? 3 : x + 1;
                var value = this.GridIronGang.grid[y][x];

                if (y != 4) {
                    if (value == 0) {
                        if (this.GridIronGang.grid[y][i] != 0) {
                            this.GridIronGang.grid[y][x] = this.GridIronGang.grid[y][i];
                        } else {continue;}
                    }
                    else {
                        
                            if (this.GridIronGang.grid[y][x] == this.GridIronGang.grid[y][x+1]) {
                                this.GridIronGang.grid[y][x] = ((this.GridIronGang.grid[y][x + 1]) * 2);
                            } else { continue; }
                        
                    }
                        this.GridIronGang.grid[y][i] = 0;
                }
            }
        }

        this.Remove_Nodes(this.GridIronGang.grid);
        this.Display_Grid();
    },

    moveRight: function() {
        var grid = this.GridIronGang.grid;

        for (var counter = 0; counter < grid[counter].length; counter++) {
            for (var i = 0; i < grid.length; i++) {
                if (grid[counter][i] != 0) {
                    console.log(grid);
                }
            }
        }

        this.Remove_Nodes(this.GridIronGang.grid);
        this.GridIronGang.place_tile();
        this.Display_Grid(this.GridIronGang);
    },
};