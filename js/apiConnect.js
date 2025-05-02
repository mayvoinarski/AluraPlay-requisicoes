async function videosList() {
  const connection = await fetch("http://localhost:3000/videos");
  const convertedConnection = await connection.json();

  return convertedConnection;
}

async function createVideo(title, description, url, image) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: `${description} mil visualizações`,
      url: url,
      image: image,
    }),
  });

  if (!connection.ok) {
    throw new Error ("Não foi possível enviar o vídeo"); 
  }

  const convertedConnection = await connection.json();

  return convertedConnection;
}
 
async function videoSearch(searchTerm) {
  const connection = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)
  const convertedConnection = await connection.json();

  return convertedConnection;
}

export const apiConnection = {
  videosList,
  createVideo,
  videoSearch
};
