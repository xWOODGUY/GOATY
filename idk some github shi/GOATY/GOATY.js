const games = [
    {
        name: "Gra",
        img: "",
        url: ""
    },
    ];

    function launchGame(url, name) {
    document.getElementById('game-frame').src = url;
    document.getElementById('game-name').innerText = name;
    document.getElementById('game-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    document.getElementById('game-modal').style.display = 'none';
    document.getElementById('game-frame').src = '';
    document.body.style.overflow = 'auto';
}
function toggleFullscreen() {
    const container = document.getElementById('game-container');
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}