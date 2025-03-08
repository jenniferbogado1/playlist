document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        {
            name: 'Born To Die - Lana Del Rey',
            audio: 'https://www.dropbox.com/scl/fi/wc2y509k7r1vm636kmfcv/Lana-Del-Rey-Born-To-Die-LanaDelReyVEVO.mp3?rlkey=wcjlvyu3gkw81v2e6fdexe6co&st=o6hvz6d8&dl=1',
            image: 'https://i.imgur.com/scsbxf4.jpeg'
        },
        {
            name: '2 much - Justin Bieber',
            audio: 'https://www.dropbox.com/scl/fi/05hwg1g8sq818wep9fr4m/Justin-Bieber-2-Much-Visualizer-JustinBieberVEVO.mp3?rlkey=3jeg7djqg1ohzw4nk7cj2d1x9&st=6wjes4zl&dl=1',
            image: 'https://i.imgur.com/olia8iv.gif'
        },
        {
            name: 'Apocalypse - Cigarettes After Sex',
            audio: 'https://www.dropbox.com/scl/fi/gpu1mkzgz0dig8zhu3adu/Apocalypse-Cigarettes-After-Sex-Cigarettes-After-Sex-1.mp3?rlkey=s08zx8qwizd3m9g2t905a1urs&st=xnq213d8&dl=1',
            image: 'https://i.imgur.com/PrxIDOx.gif'
        },
        {
            name: 'We fell in love in October - girl in red',
            audio: 'https://www.dropbox.com/scl/fi/b58lh6rqq5ayp5felczyu/girl-in-red-we-fell-in-love-in-october-girl-in-red.mp3?rlkey=vqjnw4clph3yle7nhi7yfgfh2&st=x7696qkb&dl=1',
            image: 'https://i.imgur.com/rMM2IFB.gif'
        },
        {
            name: 'I wanna be yours - Arctic Monkeys',
            audio: 'https://www.dropbox.com/scl/fi/o4v89iucfe2hzpzlgcp4o/I-Wanna-Be-Yours-Arctic-Monkeys.mp3?rlkey=ngfkucd1gwxps5zfr5ys5oc6e&st=vo23t03f&dl=1',
            image: 'https://imgur.com/9Q53WwT.gif'
        }
        
        {
            name: 'Sweater Weather - The Neighbourhood',
            audio: 'https://www.dropbox.com/scl/fi/y6bgz5a12gpvr1jpdzner/The-Neighbourhood-Sweater-Weather-Official-Video-TheNeighbourhoodVEVO-2.mp3?rlkey=njddjucjbnb9cw6b0cqt82ijp&st=oqeukjv7&dl=1',

            image: 'https://i.imgur.com/7uODVKb.gif'
        }



    ];

    let currentSongIndex = 0;
    const audioElement = document.getElementById('audio');
    const songImage = document.getElementById('song-image');
    const songName = document.getElementById('song-name');

    function loadSong(index) {
        const song = songs[index];
        audioElement.src = song.audio;
        songImage.src = song.image;
        songName.textContent = song.name;
        audioElement.play();
    }

    loadSong(currentSongIndex);

    document.getElementById('next-btn').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
    });

    document.getElementById('random-btn').addEventListener('click', () => {
        currentSongIndex = Math.floor(Math.random() * songs.length);
        loadSong(currentSongIndex);
    });

    // Cuando la canción termina, reproduce la siguiente automáticamente
    audioElement.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
    });
});