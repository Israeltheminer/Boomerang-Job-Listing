import React, { useEffect } from "react";
import Head from "./components/Head";
import Profiles from "./components/Profiles";
import removeLogo from "./assets/icons/icon-remove.svg";
import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { removeTag, clearTags } from "./redux/FilterSlice";
import { resetProfiles, filter } from "./redux/ProfileSlice";

const Main: React.FC = () => {
	const { profiles } = useSelector((state: RootState) => state.profiles);
	const { tags } = useSelector((state: RootState) => state.tags);
	const dispatch = useDispatch();
	const removeSingleTag = (tag: { key: string; bracket: string }) => {
		dispatch(removeTag(tag));
	};
	useEffect(() => {
		tags.length === 0 ? dispatch(resetProfiles()) : dispatch(filter(tags));
	}, [tags, dispatch]);
	return (
		<>
			<Head />
			<div
				className={`${
					tags.length > 0 ? "pt-0 md:pt-6" : "pt-10"
				} pb-20 px-[12.5%] sm:px-[10%] xs:px-[7.5%]`}>
				{tags.length > 0 && (
					<div className='bg-white rounded-md min-h-[65px] relative bottom-10 py-3 px-8 flex items-center justify-between md:bottom-16 shadow-md md:px-6 sm:px-4 sm:text-sm xs:py-2'>
						<div className='flex items-center gap-4 flex-wrap'>
							{tags.length > 0 &&
								tags.map((tag, index) => {
									return (
										<span
											className='rounded-[4px] bg-[#e7f9f9] transition ease-in-out inline-flex justify-between'
											key={index}>
											<span className='inline py-1 px-3 text-[#62aaaa]'>{tag.key}</span>
											<span
												className='bg-[#62aaaa] flex items-center w-[30px] justify-center rounded-r-md cursor-pointer hover:bg-[#2c3a3a] transition-colors ease-in-out'
												onClick={() => removeSingleTag(tag)}>
												<img src={removeLogo} alt='remove' />
											</span>
										</span>
									);
								})}
						</div>
						<span
							className='text-[#62aaaa] font-bold hover:underline cursor-pointer ml-4'
							onClick={(): { payload: undefined; type: string } => dispatch(clearTags())}>
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
