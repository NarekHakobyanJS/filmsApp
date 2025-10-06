import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "./slices/genresSlice";

const store = configureStore({
    reducer : {
        genresData : genresSlice
    }
})

export default store