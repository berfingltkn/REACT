import axios from 'axios';
const searchImages = async (term) => {
    //apiye istek atma

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID OWyCCTR2t_wZVNwMHrK0c7NXXaAnlHQ6LNfsXSvebxI'
        },
        params: {
            query: term
        }
    });
    return response.data.results;

}

export default searchImages;