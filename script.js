// Lista de canciones (nombre, ruta del audio, imagen)
const songs = [
    {
        name: 'Born To Die - Lana Del Rey',
        audio: 'https://docs.google.com/uc?export=download&id=1tKjDCnKFXyrI5EChZ8PG-M5kfqkkmlen',  // Cambia con las rutas reales
        image: 'ruta/imagen1.jpg'   // Cambia con las rutas reales
    },
    {
        name: 'Canción 2',
        audio: 'ruta/audio2.mp3',
        image: 'ruta/imagen2.jpg'
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