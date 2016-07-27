var INPUT = {
    up: 38,
    dn: 40,
    lf: 37,
    rt: 39,
    move_tiles: function(value_of_key) {
        switch(value_of_key) {
            case this.up:
                GAME_MANAGER.moveUp();
                console.log("move all blocks up");
                break;
            case this.dn:
                GAME_MANAGER.moveDown();
                console.log("move all blocks down");
                break;
            case this.lf:
                GAME_MANAGER.moveLeft();
                console.log("move all blocks left");
                break;
            case this.rt:
                GAME_MANAGER.moveRight();
                console.log("move all blocks right");
                break;
        }
    },

    // attach click listener to the dom nodes
    init: function () {
        var self = this;
        document.addEventListener("keydown", function(event) {
            self.move_tiles(event.which);
        });
    }
};