const apiConfig = {
    baseUrl: `https://api.themoviedb.org/3`,
    apikey: 'API_KEY',
    originalImg: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Img: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;