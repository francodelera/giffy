import { API_KEY, API_URL } from "./settings";

export default async function getGifs({ keyword }) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
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