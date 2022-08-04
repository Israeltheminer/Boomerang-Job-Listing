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

const initialState: ProfileState = {
	profiles: data,
};

type Tag = { key: string; bracket: string };
type AllTags = { key: string; bracket: string }[];

export const ProfileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {
		resetProfiles: (state) => {
			state.profiles = data;
		},
		filter: (state, action: PayloadAction<AllTags>) => {
			let allTags = action.payload;
			let previousProfiles = data;
			allTags.forEach((tag) => {
				if (tag.bracket === "Level") {
					let newProfilesByLevel = previousProfiles.filter(
						(profile): boolean => profile.level === tag.key
					);
					state.profiles = newProfilesByLevel;
				} else if (tag.bracket === "Role") {
					let newProfilesByRole = previousProfiles.filter(
						(profile): boolean => profile.role === tag.key
					);
					state.profiles = newProfilesByRole;
				} else if (tag.bracket === "Tools") {
					let newProfilesByTools = previousProfiles.filter((profile): boolean => {
						let tools = profile.tools;
						let tool = "";
						for (let i = 0; i < tools.length; i++) {
							if (profile.tools[i] === tag.key) {
								tool = profile.tools[i];
							}
						}
						return tool === tag.key;
					});
					state.profiles = newProfilesByTools;
				} else if (tag.bracket === "Languages") {
					let newProfilesByLanguages = previousProfiles.filter((profile): boolean => {
						let languages = profile.languages;
						let language = "";
						for (let i = 0; i < languages.length; i++) {
							if (profile.languages[i] === tag.key) {
								language = profile.languages[i];
							}
						}
						return language === tag.key;
					});
					state.profiles = newProfilesByLanguages;
				}
			});
		},
		singleTagFilter: (state, action: PayloadAction<Tag>) => {
			let tagKey = action.payload.key;
			let tagBracket = action.payload.bracket;
			let previousProfiles = state.profiles;
			if (tagBracket === "Level") {
				let newProfilesByLevel = previousProfiles.filter(
					(profile): boolean => profile.level === tagKey
				);
				state.profiles = newProfilesByLevel;
			} else if (tagBracket === "Role") {
				let newProfilesByRole = previousProfiles.filter(
					(profile): boolean => profile.role === tagKey
				);
				state.profiles = newProfilesByRole;
			} else if (tagBracket === "Tools") {
				let newProfilesByTools = previousProfiles.filter((profile): boolean => {
					let tools = profile.tools;
					let tool = "";
					for (let i = 0; i < tools.length; i++) {
						if (profile.tools[i] === tagKey) {
							tool = profile.tools[i];
						}
					}
					return tool === tagKey;
				});
				state.profiles = newProfilesByTools;
			} else if (tagBracket === "Languages") {
				let newProfilesByLanguages = previousProfiles.filter((profile): boolean => {
					let languages = profile.languages;
					let language = "";
					for (let i = 0; i < languages.length; i++) {
						if (profile.languages[i] === tagKey) {
							language = profile.languages[i];
						}
					}
					return language === tagKey;
				});
				state.profiles = newProfilesByLanguages;
			}
		},
	},
});

export const { singleTagFilter, resetProfiles, filter } = ProfileSlice.actions;

export default ProfileSlice.reducer;
