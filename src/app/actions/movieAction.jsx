import axios from "../../utils/Axios";
import { loadMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/movie/${id}`);
        const externalIds = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
        const translations = await axios.get(`/movie/${id}/translations`);

        const data = {
            details: details.data,
            externalIds: externalIds.data,
            recommendations: recommendations.data.results,
            videos: videos.data.results.find((item) => item.type === "Trailer"),
            similar: similar.data.results,
            watchProviders: watchProviders.data.results.IN,
            translations: translations.data.translations,
        };
        console.log(data);
        dispatch(loadMovie(data));
    } catch (error) {
        console.log(error);
    }
};
