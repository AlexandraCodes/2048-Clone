var TILE = {
    spawn_tiles: function(x, y, score) {
        var element = document.createElement("div");
        element.innerHTML = "<h2>" + score + "</h2>";
        element.className = "sq" + score;
        var fill = document.getElementById(y+""+x);
        fill.appendChild(element);
    },

    remove_tile: function(x, y) {
        
        location.parentNode.removeChild(location);
    }
};