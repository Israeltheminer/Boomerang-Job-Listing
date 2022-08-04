import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./ProfileSlice";
import FilterReducer from "./FilterSlice";

export const store = configureStore({
	reducer: {
		profiles: ProfileReducer,
		tags: FilterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch