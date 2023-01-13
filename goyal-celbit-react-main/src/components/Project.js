import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
import HeaderComponent from "../template/HeaderText";

// icons
import Project1 from "../assets/projects/project1.png";
import Project2 from "../assets/projects/project2.png";
import Project3 from "../assets/projects/project3.png";
import Project4 from "../assets/projects/project4.png";

import GreyDot from "../assets/patterns/grey.png";

// styles
const Container = styled.section`
	position: relative;
	z-index: 0;
	overflow: hidden;
	background-color: #f6f6f6;
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
	margin-bottom: 5rem;
	text-align: center;

	@media (min-width: 601px) and (max-width: 1024px) {
		margin-bottom: 3rem;
	}
`;

const GridContainer = styled.div`
	text-align: center;

	@media (min-width: 1280px) {
		width: 70%;
		margin: auto;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 80%;
		margin: auto;
	}
	@media (min-width: 1920px) {
		width: 60%;
		margin: auto;
	}
`;

const GridBoxContainer = styled.div`
	position: relative;
	z-index: 0;
	overflow: hidden;
	width: 100%;
	/* box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%); */
	border-radius: 0.5rem;
`;

const GridImageBox = styled.div``;

const GridImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;

	@media (max-width: 600px) {
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		width: 5rem;
	}
`;

const GridTextBox = styled.div`
	position: absolute;
	z-index: 1;
	background-color: rgb(251, 176, 52, 0.85);
	height: 100%;
	width: 100%;
	top: -100%;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding-inline: 2rem;
`;

const GridTitle = styled.p`
	color: var(--primaryTextColor);
	/* font */
	font-size: 1.8rem;
	font-weight: 700;
	/* attribute */
	text-transform: uppercase;
	letter-spacing: 0.5px;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		font-size: 1.25rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.9rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1rem;
	}
`;

const DescriptionText = styled.div`
	color: var(--secondTextColor);
	/* font */
	font-size: 1.2rem;
	font-weight: 400;
	/* attribute */
	text-transform: capitalize;
	letter-spacing: 0.5px;
	opacity: 0.8;
	margin-top: 1rem;

	@media (max-width: 600px) {
		font-size: 1rem;
		padding-inline: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
		margin-top: 0.5rem;
		padding-inline: 1rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 0.75rem;
	}
`;

const GridBox = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid var(--border);
	border-radius: 0.3rem;
	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
	cursor: pointer;
	/* display */
	display: flex;
	flex-direction: column;

	&:hover {
		/* color: var(--whiteColor);
		transform: translateY(-6px);
		background: linear-gradient(to bottom, #1da8eb, #495ef2);
		transition: all 0.2s ease-in-out; */
	}
	&:hover ${DescriptionText} {
	}
	&:hover ${GridTextBox} {
		top: 0;
		transition: all 0.3s ease-in-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
	}
`;

export default function Services() {
	const data = [
		{
			title: "CONQUEST",
			description: "India's Largest Student-run Startup Conclave",
			icon: Project1,
		},
		{
			title: "Summer in a Startup",
			description: "Provides summer internships to BITSians",
			icon: Project2,
		},
		{
			title: "E-Week",
			description: "Promotes Entrepreneurial Spirit on Campus",
			icon: Project3,
		},
		{
			title: "Rural Entrepreneurship Division",
			description: "promotes rural Entrepreneurship",
			icon: Project4,
		},
	];

	return (
		<Container id='projects'>
			<Dots src={GreyDot} alt='Grey Dots Pattern' />
			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Our Projects</HeaderComponent>
				</HeaderBox>

				<GridContainer>
					<Grid
						container
						justify-content='center'
						spacing={{ xs: 4, sm: 6, md: 6 }}
						sx={{ display: "flex", alignItems: "stretch" }}
					>
						{data.map((item, index) => (
							<Grid
								item
								key={index}
								xs={12}
								sm={6}
								md={6}
								sx={{ display: "flex", alignItems: "stretch" }}
							>
								<GridBoxContainer>
									<GridBox>
										<GridImageBox>
											<GridImage src={item.icon} loading='lazy' alt={item.title} />
										</GridImageBox>

										<GridTextBox>
											<GridTitle>{item.title}</GridTitle>
											<DescriptionText>{item.description}</DescriptionText>
										</GridTextBox>
									</GridBox>
								</GridBoxContainer>
							</Grid>
						))}
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
