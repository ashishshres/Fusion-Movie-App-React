import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import showReducer from "./reducers/showSlice";
import peopleReducer from "./reducers/peopleSlice";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        show: showReducer,
        people: peopleReducer,
    },
});
