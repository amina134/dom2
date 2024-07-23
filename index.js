document.addEventListener("DOMContentLoaded", (event) => {
    var box = document.getElementById('color-box');
    var but = document.getElementById('change-color-btn');
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    but.addEventListener('click', function() {
        var newcolor = getRandomColor();
        box.style.backgroundColor = newcolor;
    });
});
