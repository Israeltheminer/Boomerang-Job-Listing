import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/profiles";

export interface ProfileState {
	profiles: {
		id: number;
		company: string;
		new: boolean;
		featured: boolean;
		position: string;
		role: string;
		level: string;
		postedAt: string;
		contract: string;
		location: string;
		languages: string[];
		tools: string[];
	}[];
}

type ResultType = {
	id: number;
	company: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}[];

const initialState: ProfileState = {
	profiles: data,
};

type AllTags = { key: string; bracket: string }[];
type tags = { key: string; bracket: string };

export const ProfileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {
		resetProfiles: (state) => {
			state.profiles = data;
		},
		filter: (state, action: PayloadAction<AllTags>) => {
			let allTags = action.payload;
			let previousProfiles = state.profiles;
			let initialProfiles = data;
			let filteredResult: ResultType | any;
			const filterTag = (tag: tags, profiles: ResultType): ResultType => {
				let result: ResultType | any;
				if (tag.bracket === "Level") {
					let newProfilesByLevel = profiles.filter(
						(profile): boolean => profile.level === tag.key
					);
					result = newProfilesByLevel;
				} else if (tag.bracket === "Role") {
					let newProfilesByRole = profiles.filter(
						(profile): boolean => profile.role === tag.key
					);
					result = newProfilesByRole;
				} else if (tag.bracket === "Tools") {
					let newProfilesByTools = profiles.filter((profile): boolean => {
						let tools = profile.tools;
						let tool = "";
						for (let i = 0; i < tools.length; i++) {
							if (profile.tools[i] === tag.key) {
								tool = profile.tools[i];
							}
						}
						return tool === tag.key;
					});
					result = newProfilesByTools;
				} else if (tag.bracket === "Languages") {
					let newProfilesByLanguages = profiles.filter((profile): boolean => {
						let languages = profile.languages;
						let language = "";
						for (let i = 0; i < languages.length; i++) {
							if (profile.languages[i] === tag.key) {
								language = profile.languages[i];
							}
						}
						return language === tag.key;
					});
					result = newProfilesByLanguages;
				}
				return result;
			};
			for (let i = 0; i < allTags.length; i++) {
				let tag = allTags[i];
				if (i === 0) {
					filteredResult = filterTag(tag, initialProfiles);
				} else {
					filteredResult = filterTag(tag, previousProfiles);
				}
			}
			state.profiles = filteredResult;
		},
	},
});

export const { resetProfiles, filter } = ProfileSlice.actions;

export default ProfileSlice.reducer;
