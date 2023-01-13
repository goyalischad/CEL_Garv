import React from "react";
import styled from "styled-components";

// component
import HeaderComponent from "../template/HeaderText";

import YellowDot from "../assets/patterns/yellow.png";
import GreyDot from "../assets/patterns/grey.png";

// styles
const Container = styled.section`
	position: relative;
	/* attr */
	padding-block: 4rem;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding-block: 5rem;
	}
`;

const Wrapper = styled.div`
	width: 85%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 95%;
	}
`;

const TopDots = styled.img`
	position: absolute;
	z-index: -1;
	top: 2%;
	right: 2%;
	width: 5rem;
	object-fit: contain;
	opacity: 0.6;

	@media (max-width: 600px) {
		display: none;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 3rem;
	}
`;

const BottomDots = styled.img`
	position: absolute;
	z-index: -1;
	bottom: 2%;
	left: 2%;
	width: 5rem;
	object-fit: contain;
	opacity: 0.6;

	@media (max-width: 600px) {
		display: none;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 3rem;
	}
`;

const HeaderBox = styled.div`
	margin-bottom: 4rem;
	text-align: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 3rem;
	}
`;
const VideoContainer = styled.div``;

const VideoWrapper = styled.div`
	width: 75%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 85%;
	}
`;

const Video = styled.div`
	position: relative;
	height: 35rem; /** Change this height to increase or decrease video hight */
	width: 100%;
	border: 1px solid var(--goldColor);
	overflow: hidden;

	@media (max-width: 600px) {
		height: 20rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		height: 25rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		height: 28rem;
	}
`;

const VideoContent = styled.iframe`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
`;

export default function Page() {
	return (
		<Container>
			<TopDots src={GreyDot} alt='Yellow Dots Pattern' />
			<BottomDots src={YellowDot} alt='Grey Dots Pattern' />
			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Our Mission</HeaderComponent>
				</HeaderBox>

				<VideoContainer>
					<VideoWrapper>
						<Video>
							<VideoContent
								src='https://www.youtube.com/embed/DTPAcU-ui9c'
								frameBorder='0'
								allowfullcreen
							></VideoContent>
						</Video>
					</VideoWrapper>
				</VideoContainer>
			</Wrapper>
		</Container>
	);
}
