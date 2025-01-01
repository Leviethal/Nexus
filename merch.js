const tiles = document.querySelectorAll('.tile');
const container = document.querySelector('.tiles-container');

function checkCenterTile() {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;

    tiles.forEach(tile => {
        const tileRect = tile.getBoundingClientRect();
        const tileCenterX = tileRect.left + tileRect.width / 2;

        if (Math.abs(centerX - tileCenterX) < tileRect.width / 2) {
            tile.classList.add('enlarge');
        } else {
            tile.classList.remove('enlarge');
        }
    });
}

// Check the center tile periodically
setInterval(checkCenterTile, 100);
