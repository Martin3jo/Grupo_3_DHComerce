//Despliegue de menu
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggle-btn');
    var menu = document.getElementById('menu');
    console.log(toggleBtn, menu);
    toggleBtn.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && event.target !== toggleBtn) {
            menu.style.display = 'none';
        }
    });
});