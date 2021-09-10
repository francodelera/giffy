import { API_KEY, API_URL } from "./settings";

export default async function getGifs({ limit = 15, keyword, rating, page = 0 }) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(result => {
            const { data = [] } = result;
            if (Array.isArray(data)) {
                return data.map(image => {
                    const { images, title, id } = image;
                    const { url } = images.downsized_medium;
                    return { title, id, url };
                })
            }
        })
}