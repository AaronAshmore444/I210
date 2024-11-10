const artistsRef = document.querySelector("#artists");

async function getArtist() {
    const artistResponse = await fetch(``);
    const artistData = await artistResponse.json();

    console.log(artistData);
}

getArtist();
