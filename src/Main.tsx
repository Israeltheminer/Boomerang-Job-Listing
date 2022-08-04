import React, { useState, useEffect } from "react";
import Head from "./components/Head";
import profileData from "./data/profiles";
import Profiles from "./components/Profiles";
import removeLogo from "./assets/icons/icon-remove.svg";

const Main: React.FC = () => {
	const [profiles, setProfiles] = useState(profileData);
	const [filterKeys, setFilterKeys] = useState(["Frontend", "Java", "Flutter"]);
	const removeKey = (uniqueKey: string): void => {
		const flitered = filterKeys.filter((key) => key !== uniqueKey);
		setFilterKeys((prev): string[] => (prev = flitered));
	};
	useEffect(() => {
		let newKey = filterKeys[filterKeys.length - 1];
		// State profile data to processed info fetched from filtering the prev profiles
	}, [filterKeys]);
	return (
		<>
			<Head />
			<div
				className={`${
					filterKeys.length > 0 ? "pt-0 md:pt-6" : "pt-10"
				} pb-20 px-[12.5%] sm:px-[10%] xs:px-[7.5%]`}>
				{filterKeys.length > 0 && (
					<div className='bg-white rounded-md min-h-[65px] relative bottom-10 py-3 px-8 flex items-center justify-between md:bottom-16 shadow-md md:px-6 sm:px-4 sm:text-sm xs:py-2'>
						<div className='flex items-center gap-4 flex-wrap'>
							{filterKeys.length > 0 &&
								filterKeys.map((key, index) => {
									return (
										<span
											className='rounded-[4px] bg-[#e7f9f9] font-semibold transition ease-in-out inline-flex justify-between'
											key={index}>
											<span className='inline py-1 px-3 text-[#62aaaa]'>{key}</span>
											<span
												className='bg-[#62aaaa] flex items-center w-[30px] justify-center rounded-r-md cursor-pointer hover:bg-[#2c3a3a] transition-colors ease-in-out'
												onClick={() => removeKey(key)}>
												<img src={removeLogo} alt='remove' />
											</span>
										</span>
									);
								})}
						</div>
						<span
							className='text-[#62aaaa] font-bold hover:underline cursor-pointer ml-4'
							onClick={(): void => setFilterKeys([])}>
							Clear
						</span>
					</div>
				)}
				<Profiles profile={profiles} />
			</div>
		</>
	);
};

export default Main;
