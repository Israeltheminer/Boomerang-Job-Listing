import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FliterState {
	tags: {
		key: string;
		bracket: string;
	}[];
}

const initialState: FliterState = {
	tags: [],
};

export const FliterSlice = createSlice({
	name: "tags",
	initialState,
	reducers: {
		removeTag: (state, action: PayloadAction<{ key: string; bracket: string }>) => {
			const previousTags = state.tags;
			const newTag = action.payload;
			state.tags = previousTags.filter((tag): boolean => tag.key !== newTag.key);
		},
		addTag: (state, action: PayloadAction<{ key: string; bracket: string }>) => {
			const newTag = action.payload;
			const previousTags = state.tags;
			let isDuplicate: boolean = false;
			for (let i = 0; i < previousTags.length; i++) {
				if (newTag.key === previousTags[i].key) {
					isDuplicate = true;
				}
			}
			if (!isDuplicate) {
				state.tags = [...previousTags, newTag];
			}
		},
		clearTags: (state) => {
			state.tags = [];
		},
	},
});

export const { removeTag, addTag, clearTags } = FliterSlice.actions;

export default FliterSlice.reducer;
