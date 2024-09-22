import axios from "../../utils/Axios";
import { loadShow } from "../reducers/showSlice";
export { removeShow } from "../reducers/showSlice";

export const asyncLoadShow = (id) => async (dispatch, getState) => {
    try {
        const details = await axios.get(`/tv/${id}`);
        const externalIds = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        const translations = await axios.get(`/tv/${id}/translations`);

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
        dispatch(loadShow(data));
    } catch (error) {
        console.log(error);
    }
};
