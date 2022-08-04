import React from "react";
import account from "../assets/icons/account.svg";
import eyecam from "../assets/icons/eyecam-co.svg";
import faceit from "../assets/icons/faceit.svg";
import insure from "../assets/icons/insure.svg";
import loop from "../assets/icons/loop-studios.svg";
import manage from "../assets/icons/manage.svg";
import myhome from "../assets/icons/myhome.svg";
import photosnap from "../assets/icons/photosnap.svg";
import shortly from "../assets/icons/shortly.svg";
import filter from "../assets/icons/the-air-filter-company.svg";

const ProfileImage: React.FC<{ name: string }> = ({ name }) => {
	return (
		<div className='min-w-[60px] md:absolute md:top-[-30px] md:left-[20px] md:w-[40px] xs:w-[35px]'>
			<img
				src={
					name === "Photosnap"
						? photosnap
						: name === "The Air Filter Company"
						? filter
						: name === "Eyecam Co."
						? eyecam
						: name === "Insure"
						? insure
						: name === "Shortly"
						? shortly
						: name === "FaceIt"
						? faceit
						: name === "Loop Studios"
						? loop
						: name === "MyHome"
						? myhome
						: name === "Account"
						? account
						: name === "Manage"
						? manage
						: account
				}
				alt={name}
				className='hover:animate-bounce'
			/>
		</div>
	);
};

export default ProfileImage;
