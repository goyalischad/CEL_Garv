import React, { useState, useEffect } from "react";
import styled from "styled-components";

// icons
import IN from "../assets/icons/Instagram.png";
import FB from "../assets/icons/Facebook.png";
import TW from "../assets/icons/Twitter.png";
import LI from "../assets/icons/LinkedIn.png";
import YB from "../assets/icons/Youtube.png";

import Logo from "../assets/logo/logo.png";

// styled Component
const Container = styled.section`
	padding: 5rem 0 2rem 0;
	background: #024add;
	background: linear-gradient(90deg, #024add, #01a3f4 50%, #024add);

	@media (min-width: 601px) and (max-width: 1024px) {
		padding-block: 2rem;
	}
`;

const Wrapper = styled.div`
	/* width */
	max-width: 85%;
	margin: auto;

	@media (min-width: 1920px) {
		width: 80%;
		margin: auto;
	}
	@media (min-width: 1920px) {
		width: 80%;
		margin: auto;
	}
`;

// Logo, Bottom and Social Media Icon
const NavigationMainContainer = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 4rem;

	@media (max-width: 600px) {
		display: block;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding-bottom: 3rem;
	}
`;

const LogoWrapper = styled.div`
	@media (max-width: 600px) {
		text-align: center;
		margin-bottom: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const LogoImage = styled.img`
	width: 12rem;
	height: 100%;
	cursor: pointer;

	@media (max-width: 600px) {
		width: 14rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 7rem;
	}
`;

const BottomNavigationWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	@media (max-width: 600px) {
		flex-direction: column;
		gap: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0;
	}
`;

const BottomNavigationBox = styled.div`
	margin-block: 1rem;
	padding: 0.7rem 0.8rem;
	border-radius: 0.3rem;

	&:hover {
		background-color: var(--mc2);
		transition: all 0.2s ease-in-out;
	}
`;

const BottomNavigationText = styled.p`
	color: var(--whiteColor);
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 0.5px;
	/* opacity: 0.8; */

	${BottomNavigationBox}:hover & {
		opacity: 1;
		color: var(--blackColor);
		transition: all 0.2s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
`;

const SocialIconWrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;

	@media (max-width: 600px) {
		max-width: 70%;
		margin: auto;
		padding-block: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		gap: 0.5rem;
	}
`;

const SocialIconBox = styled.div``;

const SocialIconImage = styled.img`
	width: 2rem;
	height: 100%;
	cursor: pointer;
	/* opacity: 0.7; */

	&:hover {
		/* opacity: 1; */
		transform: scale(1.1);
		transition: opacity 0.25s ease-in-out;
	}
	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 1.5rem;
	}
`;

// Copyright with Year and Policies
const CopyRightMainContainer = styled.div`
	text-align: center;
`;

const CopyRightWrapper = styled.div``;

const CopyRightText = styled.p`
	color: var(--whiteColor);
	font-size: 0.9rem;
	opacity: 0.9;

	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.55rem;
	}
`;

export default function Footer() {
	const [dateYear, setDateYear] = useState("");

	const bottomNavigationData = [
		{
			title: "Home",
			link: "#Home_Section",
		},
		{
			title: "Projects",
			link: "#project",
		},
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Contact",
			link: "#contact",
		},
	];

	const bottomSocialMediaData = [
		{
			title: "facebook link",
			link: "https://www.facebook.com/celbits/",
			image: FB,
		},
		{
			title: "Instagram link",
			link: "https://www.instagram.com/celbitsp/?hl=en",
			image: IN,
		},
		{
			title: "LinkedIn link",
			link: "https://www.linkedin.com/company/center-for-entrepreneurial-leadership-bits-pilani/mycompany/",
			image: LI,
		},
		{
			title: "Twitter link",
			link: "https://twitter.com/celbits?lang=en",
			image: TW,
		},
		{
			title: "Youtube link",
			link: "https://www.youtube.com/c/celbitspilani",
			image: YB,
		},
	];

	useEffect(() => {
		const yearValue = new Date().getFullYear();
		setDateYear(yearValue);
	}, []);

	return (
		<Container>
			<Wrapper>
				{/* Logo, Bottom and Social Media Icon */}
				<NavigationMainContainer>
					<LogoWrapper>
						<a href='/'>
							<LogoImage src={Logo} alt='CEL' loading='lazy' height='50' width='50' />
						</a>
					</LogoWrapper>
					{/* Bottom Nav */}
					<BottomNavigationWrapper>
						{bottomNavigationData.map((item, id) => (
							<a href={item.link} key={id}>
								<BottomNavigationBox>
									<BottomNavigationText>{item.title}</BottomNavigationText>
								</BottomNavigationBox>
							</a>
						))}
					</BottomNavigationWrapper>
					{/* Social Media Icon */}
					<SocialIconWrapper>
						{bottomSocialMediaData.map((item, id) => (
							<SocialIconBox key={id}>
								<a href={item.link}>
									<SocialIconImage
										src={item.image}
										alt={item.title}
										loading='lazy'
										height='24'
										width='24'
									/>
								</a>
							</SocialIconBox>
						))}
					</SocialIconWrapper>
				</NavigationMainContainer>

				{/* Copyright with Year and Policies */}
				<CopyRightMainContainer>
					<CopyRightWrapper>
						<CopyRightText>
							&copy; Copyright CEL | BITS PILANI, ALL RIGHTS RESERVED {dateYear}.
						</CopyRightText>
					</CopyRightWrapper>
				</CopyRightMainContainer>
			</Wrapper>
			{/* // https://www.facebook.com/Smarttechinfinity */}
		</Container>
	);
}
