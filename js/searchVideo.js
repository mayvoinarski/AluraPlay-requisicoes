import { apiConnection } from "./apiConnect.js";
import cardBuild from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();
    const searchData = document.querySelector("[data-search]").value;
    const search = await apiConnection.videoSearch(searchData);

    const list = document.querySelector("[data-list]");

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    search.forEach(element => list.appendChild(
        cardBuild(element.title, element.description, element.url, element.image)));

    if (search.length == 0) {
        list.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com este termo! </h2>`
    }  
              
}

const searchButton = document.querySelector("[data-search-button]");

searchButton.addEventListener("click", event => searchVideo(event))
