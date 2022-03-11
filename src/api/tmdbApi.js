import axiosClient from './axiosClients';

export const category = {
    movie: 'movie',
    tv: 'tv',
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        return axiosClient.get(`movie/${movieType[type]}`, params)
    },
    getTvList: (type, params) => {
        return axiosClient.get(`tv/${tvType[type]}`, params)
    },
    getVideos: (category, id) => {
        return axiosClient.get(`${category}/${id}/videos`, { params: {} })
    },
    search: (cat, params) => {
        return axiosClient.get(`search/${category[cat]}`, params)
    },
    detail: (cat, id, params) => {
        return axiosClient.get(`${category[cat]}/${id}`, params)
    },
    credits: (cat, id) => {
        return axiosClient.get(`${category[cat]}/${id}/credits`, { params: {} })
    },
    similar: (cat, id) => {
        return axiosClient.get(`${category[cat]}/${id}/similar`, { params: {} })
    },
}

export default tmdbApi;