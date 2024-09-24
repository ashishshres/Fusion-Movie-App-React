import axios from "../../utils/Axios";
import { loadPeople } from "../reducers/peopleSlice";
export { removePeople } from "../reducers/peopleSlice";

export const asyncLoadPeople = (id) => async (dispatch) => {
    try {
        const details = await axios.get(`/person/${id}`);
        const externalIds = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(
            `/person/${id}/combined_credits`
        );
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        const data = {
            details: details.data,
            externalIds: externalIds.data,
            combinedCredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,
        };
        dispatch(loadPeople(data));
    } catch (error) {
        console.log(error);
    }
};
