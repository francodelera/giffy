const apiKey = 'vVY9tnNLhgzoSw16rlkAIc8UDgIc5zX8&';

export default async function getGifs({ keyword }) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
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