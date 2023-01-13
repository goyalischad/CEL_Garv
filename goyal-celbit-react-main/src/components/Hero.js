import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import HeroImage1 from "../assets/hero/hero1.jpg";
import HeroImage2 from "../assets/hero/hero2.jpg";

const Container = styled.section``;

const Wrapper = styled.div``;

const SliderContainer = styled.div`
	height: 100vh;
	width: 100%;

	@media (min-width: 601px) and (max-width: 1024px) {
		height: 50vh;
	}
`;

const SliderBox = styled.div`
	width: 100%;
	height: 100%;
	/* position */
	position: relative;
	z-index: 0;
	/* display */
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SliderImage = styled.img`
	/* position */
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	/* size */
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const TextBox = styled.div`
	/* width */
	width: 80%;
	margin: auto;
	/* attr */
	text-align: center;
`;

const Header = styled.h1`
	color: var(--whiteColor);
	font-size: 7rem;
	font-weight: 700;

	@media (max-width: 600px) {
		font-size: 3rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 4rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1.6rem;
	}
`;

const Slogan = styled.p`
	color: var(--whiteColor);
	font-size: 1.5rem;
	font-weight: 600;
	opacity: 0.85;

	@media (max-width: 600px) {
		font-size: 1.4rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1.6rem;
	}
`;

// const Description = styled.p``;

const ButtonBox = styled.div`
	margin-top: 4rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-top: 1rem;
	}
`;

const Button = styled.a`
	/* font */
	font-size: 1.1rem;
	font-weight: 700;
	/* color */
	color: var(--blackColor);
	background: #ffdd00;
	background: linear-gradient(90deg, #fbb034, #fbb034 50%, #ffdd00);
	/* attr */
	cursor: pointer;
	letter-spacing: 1px;
	border: none;
	border-radius: 0.3rem;
	padding: 1rem 3rem;
	margin-top: 2rem;

	&:hover {
		color: var(--whiteColor);
		background: #024add;
		background: linear-gradient(90deg, #024add, #01a3f4 50%, #024add);
		transition: all 0.2s ease-out;
	}
	@media (max-width: 600px) {
		margin-top: 4rem;
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
		padding-block: 0.6rem;
	}
`;

export default function Hero() {
	const settings = {
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const data = [
		{
			header: "CONQUEST",
			slogan: "THE TEAM BEHIND INDIA'S LARGEST STUDENT-RUN STARTUP CONCLAVE",
			link: `/`,
			image: HeroImage1,
		},
		{
			header: "BITS PILANI",
			slogan: "CENTER FOR ENTREPRENEURIAL LEADERSHIP",
			link: `/`,
			image: HeroImage2,
		},
	];

	return (
		<Container>
			<Wrapper>
				<Slider {...settings}>
					{data.map((item, index) => (
						<SliderContainer key={index}>
							<SliderBox>
								{/* Image */}
								<SliderImage src={item.image} alt={item.header} loading='lazy' />
								{/* Text */}
								<TextBox>
									<Slogan>{item.slogan}</Slogan>
									<Header>{item.header}</Header>

									{/* <Description></Description> */}
									<ButtonBox>
										<Button href={item.link}>Learn More</Button>
									</ButtonBox>
								</TextBox>
							</SliderBox>
						</SliderContainer>
					))}
				</Slider>
			</Wrapper>
		</Container>
	);
}
