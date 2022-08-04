import React from "react";
import Profile from "./Profile";

interface ProfileInterface {
	profile: {
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

const Profiles: React.FC<ProfileInterface> = ({ profile }) => {
	return (
		<div className='grid grid-cols-1 gap-8 md:gap-12'>
			{profile.map((profile) => {
				return <Profile profile={profile} key={profile.id} />;
			})}
		</div>
	);
};

export default Profiles;
