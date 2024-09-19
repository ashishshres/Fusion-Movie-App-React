import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWVjNjRjODZkOTk5MmE5MTI5NjFiNDMwNGFkZDJkOCIsIm5iZiI6MTcyNjcxNzExNy42MjE2MDcsInN1YiI6IjY2ZWI5YmE4MmQ2Nzc5OWFkM2ViNmQzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gPnJHhLaIRL-bEQQoLyLHCk8qDZgiL72w53fKu_2sKY",
    },
});

export default instance;
