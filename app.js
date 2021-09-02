
const api_url = 'https://meme-api.herokuapp.com/gimme';
async function getdata() {
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("pic").src = data.url;
}

