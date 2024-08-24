document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            const results = data.songs.filter(song => 
                song.title.toLowerCase().includes(query) || 
                song.artist.toLowerCase().includes(query)
            );

            let resultHTML = '';
            if (results.length > 0) {
                results.forEach(song => {
                    resultHTML += `<div class="song-result" onclick="showLyrics('${song.title}')">
                                    <h3>${song.title} - ${song.artist}</h3>
                                    </div>`;
                });
            } else {
                resultHTML = '<p>No se encontraron canciones.</p>';
            }
            document.getElementById('songList').innerHTML = resultHTML;
        });
});

function showLyrics(title) {
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            const song = data.songs.find(song => song.title === title);
            if (song) {
                document.getElementById('lyricsContent').innerHTML = `
                    <h3>${song.title} - ${song.artist}</h3>
                    <pre>${song.lyrics}</pre>`;
            }
        });
}
