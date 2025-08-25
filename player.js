const audioPlayer = document.getElementById('audioPlayer');
const playlistEl = document.getElementById('playlist');
const statusEl = document.getElementById('status');

fetch('playlist.json', {cache: 'no-store'})
  .then(r => r.json())
  .then(tracks => {
    statusEl.textContent = '';
    if (!Array.isArray(tracks) || tracks.length === 0) {
      statusEl.innerHTML = 'No tracks yet. Add MP3s to the <code>/music</code> folder and list them in <code>playlist.json</code>.';
      return;
    }
    tracks.forEach((track, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${track.title || 'Untitled'}</strong>` + (track.artist ? ` <span class="small">— ${track.artist}</span>` : '');
      li.addEventListener('click', () => {
        document.querySelectorAll('#playlist li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
        audioPlayer.src = track.file;
        audioPlayer.play();
      });
      playlistEl.appendChild(li);
      if (index === 0) {
        li.classList.add('active');
        audioPlayer.src = track.file;
      }
    });
  })
  .catch(err => {
    statusEl.textContent = 'Could not load playlist.json';
    console.error(err);
  });
