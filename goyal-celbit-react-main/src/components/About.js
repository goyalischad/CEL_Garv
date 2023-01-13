import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// image
import LargeImage from "../assets/about/largeImage.png";
import SmallImage from "../assets/about/smallImage.png";

// component
import HeaderComponent from "../template/HeaderText";

// Main styling
const Container = styled.section`
	padding: 5rem 0;
	@media (max-width: 600px) {
		padding: 2rem 0;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 0;
	}
`;

const Wrapper = styled.div`
	width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		width: 90%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
	@media (min-width: 1920px) {
		width: 80%;
		margin: auto;
	}
`;

const TextWrapper = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}
`;

const Description = styled.p`
	color: var(--lightDescriptionColor);
	font-size: 1rem;
	margin-top: 1.5rem;
	font-weight: 300;
	line-height: 1.8;
	letter-spacing: 0.5px;
	opacity: 0.9;

	@media (max-width: 600px) {
		width: 100%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
		margin-top: 0.5rem;
	}
`;

const ImageWrapper = styled.div`
	@media (max-width: 600px) {
		margin-top: 2rem;
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;

	@media (max-width: 600px) {
		display: none;
	}
`;

const ImageSmall = styled.img`
	display: none;

	@media (max-width: 600px) {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export default function ImageFirst() {
	return (
		<Container id='about'>
			<Wrapper>
				<Grid
					container
					direction='row-reverse'
					justifyContent='space-around'
					alignItems='center'
					spacing={{ xs: 2, sm: 4, md: 4 }}
				>
					<Grid item xs={12} sm={6} md={6}>
						<TextWrapper>
							<HeaderComponent>About Us</HeaderComponent>
							<Description>
								As the Entrepreneurship Cell of one of the premier institutes of the country, the prime
								focus of the organization is to provide an environment conducive to promoting the
								entrepreneurial spirit and related skills among not only the students of the college,
								but all across the nation.
							</Description>
							<Description>
								Through an amalgamation of various projects, we aspire to cater to the interests of a
								wide variety of people - ranging from students with an entrepreneurial bent to
								economically weaker sections in the nearby rural areas, as well as established startups
								in need of funding or mentorship.
							</Description>
						</TextWrapper>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<ImageWrapper>
							<Image src={LargeImage} alt='About Us' loading='lazy' />
							<ImageSmall src={SmallImage} alt='About Us' loading='lazy' />
						</ImageWrapper>
					</Grid>
				</Grid>
			</Wrapper>
		</Container>
	);
}
