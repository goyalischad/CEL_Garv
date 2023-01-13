import React from "react";
import styled from "styled-components";

// icon
import IN from "../assets/icons/InstagramCircle.png";
import FB from "../assets/icons/FacebookCircle.png";
import LI from "../assets/icons/LinkedInCircle.png";
import TW from "../assets/icons/TwitterCircle.png";

const Container = styled.div`
	position: fixed;
	z-index: 1;
	right: 0.5%;
	top: 40%;

	@media (max-width: 601px) {
		display: none;
	}
	@media (min-width: 602px) and (max-width: 1024px) {
		top: 60%;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0rem;
`;

const IconBox = styled.div`
	margin-block: 0.2rem;
`;

const Icon = styled.img`
	width: 2.5rem;
	cursor: pointer;
	display: block;

	&:hover {
		scale: 1.1;
		transition: all 0.15s ease-in-out;
	}
`;

export default function socialBar() {
	const data = [
		{
			image: LI,
			link: "https://www.linkedin.com/company/center-for-entrepreneurial-leadership-bits-pilani/mycompany/",
			alt: "LinkedIn",
		},
		{
			image: IN,
			link: "	https://www.instagram.com/celbitsp/?hl=en",
			alt: "Instagram",
		},

		{ image: FB, link: "https://www.facebook.com/celbits/", alt: "Facebook" },
		{ image: TW, link: "https://twitter.com/celbits?lang=en", alt: "Twitter" },
	];
	return (
		<Container>
			<Wrapper>
				{data.map((item, index) => (
					<IconBox key={index}>
						<a href={item.link} target='_blank' rel='noopener noreferrer'>
							<Icon src={item.image} alt={item.alt} loading='lazy' />
						</a>
					</IconBox>
				))}
			</Wrapper>
		</Container>
	);
}
