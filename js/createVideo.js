import { apiConnection } from "./apiConnect";
const form = document.querySelector("[data-form]");

async function createVideo(event) {
    event.preventDefault();

    const image = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-title]").value;
    const description = Math.floor(Math.random()*10).toString();
    try{
        await apiConnection.createVideo(title, description, url, image);
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e)
    }
}

form.addEventListener("submit", event => createVideo(event));