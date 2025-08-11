document.addEventListener('DOMContentLoaded', function() {
    const musicPlayer = document.getElementById('background-music');
    musicPlayer.volume = 0.5;  // Domyślny poziom głośności

    // Przycisk do wyciszenia muzyki
    const muteButton = document.createElement('button');
    muteButton.innerText = 'Wycisz muzykę';
    muteButton.style.position = 'fixed';
    muteButton.style.bottom = '70px';
    muteButton.style.left = '50%';
    muteButton.style.transform = 'translateX(-50%)';
    muteButton.style.padding = '10px 20px';
    muteButton.style.backgroundColor = '#4CAF50';
    muteButton.style.color = '#fff';
    muteButton.style.border = 'none';
    muteButton.style.borderRadius = '5px';
    muteButton.style.cursor = 'pointer';
    document.body.appendChild(muteButton);

    muteButton.addEventListener('click', function() {
        if (musicPlayer.muted) {
            musicPlayer.muted = false;
            muteButton.innerText = 'Wycisz muzykę';
        } else {
            musicPlayer.muted = true;
            muteButton.innerText = 'Włącz muzykę';
        }
    });
});
