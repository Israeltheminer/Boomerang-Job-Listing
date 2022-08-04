import React from "react";
import ProfileImage from "./ProfileImage";
import { useDispatch } from "react-redux";
import { addTag } from "../redux/FilterSlice";

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
	};
}

const Profile: React.FC<ProfileInterface> = ({ profile }) => {
	const {
		company,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	} = profile;
	const dispatch = useDispatch();
	const addSingleTag = (key: string, bracket: string) => {
		const newTag = { key, bracket };
		dispatch(addTag(newTag));
	};
	return (
		<div
			className={`bg-white rounded-lg py-6 px-10 flex items-center hover:scale-105 transition ease-in-out justify-between shadow-md hover:shadow-lg border-l-[6px] border-l-white ${
				featured ? "green-border" : ""
			} lg:inline-grid lg:gap-6 lg:w-full relative md:pt-10 md:px-7 xs:px-4`}>
			<div className='flex items-center'>
				<ProfileImage name={company} />
				<div className='mx-6 max-w-[350px] md:mx-0'>
					<div className='flex items-center gap-4 flex-wrap'>
						<span className='text-[#62aaaa] font-semibold'>{company}</span>
						<div className='flex items-center gap-2'>
							{profile.new && (
								<span className='bg-[#62aaaa] rounded-3xl py-1 px-3 text-white font-medium text-[12px]'>
									NEW!
								</span>
							)}
							{featured && (
								<span className='bg-[#2c3a3a] rounded-3xl py-1 px-3 text-white font-medium text-[12px]'>
									FEATURED
								</span>
							)}
						</div>
					</div>
					<h3 className='text-2xl font-semibold my-2 hover:text-[#62aaaa] cursor-pointer transition ease-in-out md:text-[22px] sm:text-[18px]'>
						{position}
					</h3>
					<div className=''>
						<ul className='job-details-list opacity-60 list-inside sm:text-sm'>
							<li>{postedAt}</li>
							<li>{contract}</li>
							<li>{location}</li>
						</ul>
					</div>
				</div>
			</div>
			<hr className='hidden sm:block text-xl' />
			<div className='my-auto flex items-center gap-3 flex-wrap justify-end lg:justify-start sm:text-sm'>
				<span
					className='rounded-[4px] bg-[#e7f9f9] text-[#62aaaa] py-1 px-3 cursor-pointer hover:bg-[#62aaaa] hover:text-white font-semibold transition ease-in-out'
					onClick={() => addSingleTag(role, "Role")}>
					{role}
				</span>
				<span
					className='rounded-[4px] bg-[#e7f9f9] text-[#62aaaa] py-1 px-3 cursor-pointer hover:bg-[#62aaaa] hover:text-white font-semibold transition ease-in-out'
					onClick={() => addSingleTag(level, "Level")}>
					{level}
				</span>
				{languages.length > 0 &&
					languages.map((language, index) => {
						return (
							<span
								className='rounded-[4px] bg-[#e7f9f9] text-[#62aaaa] py-1 px-3 cursor-pointer hover:bg-[#62aaaa] hover:text-white font-semibold transition ease-in-out'
								key={index}
								onClick={() => addSingleTag(language, "Languages")}>
								{language}
							</span>
						);
					})}
				{tools.length > 0 &&
					tools.map((tool, index) => {
						return (
							<span
								className='rounded-[4px] bg-[#e7f9f9] text-[#62aaaa] py-1 px-3 cursor-pointer hover:bg-[#62aaaa] hover:text-white font-semibold transition ease-in-out'
								key={index}
								onClick={() => addSingleTag(tool, "Tools")}>
								{tool}
							</span>
						);
					})}
			</div>
		</div>
	);
};

export default Profile;
