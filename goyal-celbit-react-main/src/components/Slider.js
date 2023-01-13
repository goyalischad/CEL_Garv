import React, { useRef } from "react";
import styled from "styled-components";

// component
import HeaderComponent from "../template/HeaderText";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icon
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// images
import Slider1 from "../assets/slider/slider1.png";
import Slider2 from "../assets/slider/slider2.png";
import Slider3 from "../assets/slider/slider3.png";
import Slider4 from "../assets/slider/slider4.png";
import Slider5 from "../assets/slider/slider5.png";
import Slider6 from "../assets/slider/slider6.png";

// styles
const Container = styled.section`
	position: relative;
	z-index: 0;
	overflow: hidden;

	/* attr */
	padding-block: 5rem;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

const Dots = styled.img`
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

const Wrapper = styled.div`
	width: 85%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const HeaderBox = styled.div`
	margin-bottom: 4rem;
	text-align: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 3rem;
	}
`;

const SliderContainer = styled.div`
	position: relative;
	z-index: 0;

	width: 90%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 90%;
	}
	@media (min-width: 1920px) {
		width: 80%;
	}
`;

const SliderBox = styled.div`
	padding: 1rem;

	@media (min-width: 1920px) {
		padding: 2rem;
	}
`;

const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
	border-radius: 0.5rem;
`;

const NextButton = styled.button`
	position: absolute;
	z-index: 1;
	top: 45%;
	right: -5%;
	background-color: var(--nav);
	border: none;
	border-radius: 50%;
	display: block;
	cursor: pointer;
	opacity: 0.8;

	:hover {
		opacity: 1;
		transition: all 0.2s ease-in;
	}
	@media (max-width: 600px) {
		right: -10%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		right: -10%;
		top: 40%;
	}
`;

const PrevButton = styled.button`
	position: absolute;
	z-index: 1;
	top: 45%;
	left: -5%;
	background-color: var(--nav);
	border: none;
	border-radius: 50%;
	display: block;
	cursor: pointer;
	opacity: 0.8;

	:hover {
		opacity: 1;
		transition: all 0.2s ease-in;
	}
	@media (max-width: 600px) {
		left: -10%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		left: -10%;
		top: 40%;
	}
`;

export default function Page() {
	const slider = useRef(null);

	const settings = {
		arrows: false,
		speed: 700,
		slidesToShow: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const data = [
		{
			image: Slider1,
			title: "Slider 1",
		},
		{
			image: Slider2,
			title: "Slider 2",
		},
		{
			image: Slider3,
			title: "Slider 3",
		},
		{
			image: Slider4,
			title: "Slider 4",
		},
		{
			image: Slider5,
			title: "Slider 5",
		},
		{
			image: Slider6,
			title: "Slider 6",
		},
	];

	return (
		<Container>
			<Dots />
			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Recent Activities From CEL</HeaderComponent>
				</HeaderBox>
				<SliderContainer>
					<NextButton onClick={() => slider?.current?.slickNext()}>
						<ChevronRightIcon
							sx={{
								fontSize: { xs: "2.5rem", md: "2rem" },
								color: "var(--whiteColor)",
								display: "block",
							}}
						/>
					</NextButton>
					<PrevButton onClick={() => slider?.current?.slickPrev()}>
						<ChevronLeftIcon
							sx={{
								fontSize: { xs: "2.5rem", md: "2rem" },
								color: "var(--whiteColor)",
								display: "block",
							}}
						/>
					</PrevButton>
					<Slider {...settings} ref={slider}>
						{data.map((item, index) => (
							<SliderBox key={index}>
								<SliderImage src={item.image} alt={item.title} loading='lazy' />
							</SliderBox>
						))}
					</Slider>
				</SliderContainer>
			</Wrapper>
		</Container>
	);
}
