// Lista de canciones (nombre, ruta del audio, imagen)
const songs = [
    {
        name: 'Born To Die - Lana Del Rey',

        audio: 'https://www.dropbox.com/scl/fi/wc2y509k7r1vm636kmfcv/Lana-Del-Rey-Born-To-Die-LanaDelReyVEVO.mp3?rlkey=wcjlvyu3gkw81v2e6fdexe6co&st=o6hvz6d8&dl=1',

  // Cambia con las rutas reales
        image: 'https://i.imgur.com/scsbxf4.jpeg'   // Cambia con las rutas reales
    },
    {
        name: '2 much - Jb',
        audio: 'https://www.dropbox.com/scl/fi/05hwg1g8sq818wep9fr4m/Justin-Bieber-2-Much-Visualizer-JustinBieberVEVO.mp3?rlkey=3jeg7djqg1ohzw4nk7cj2d1x9&st=6wjes4zl&dl=1',
        image: 'https://i.imgur.com/olia8iv.gif'
    },
    {
        name: 'Canción 3',
        audio: 'ruta/audio3.mp3',
        image: 'ruta/imagen3.jpg'
    },
    // Agrega hasta 10 canciones
];

let currentSongIndex = 0;

const audioElement = document.getElementById('audio');
const songImage = document.getElementById('song-image');
const songName = document.getElementById('song-name');

// Función para cargar una canción
function loadSong(index) {
    const song = songs[index];
    audioElement.src = song.audio;
    songImage.src = song.image;
    songName.textContent = song.name;
    audioElement.play();
}

// Cargar la primera canción
loadSong(currentSongIndex);

// Botón de siguiente canción
document.getElementById('next-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Botón de canción anterior
document.getElementById('prev-btn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

// Botón de canción aleatoria
document.getElementById('random-btn').addEventListener('click', () => {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(currentSongIndex);
});