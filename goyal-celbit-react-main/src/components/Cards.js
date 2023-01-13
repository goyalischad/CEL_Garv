import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

// component
import HeaderComponent from "../template/HeaderText";

// icons
import IconBulb from "../assets/icons/bulb.png";
import IconMedal from "../assets/icons/medal.png";
import IconScope from "../assets/icons/scope.png";
import IconGlobe from "../assets/icons/Geography.png";

// styles
const Container = styled.section`
	position: relative;
	/* attr */
	padding-block: 7rem;

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

const GridContainer = styled.div`
	text-align: center;

	@media (max-width: 600px) {
		width: 90%;
		margin: auto;
	}
	@media (min-width: 1920px) {
		width: 80%;
		margin: auto;
	}
`;

const GridIconBox = styled.div`
	margin-bottom: 1rem;
`;

const GridIcon = styled.img`
	height: 100%;
	width: 4rem;
	object-fit: cover;

	@media (max-width: 600px) {
		width: 4rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2.5rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		width: 4rem;
	}
`;

const GridTitle = styled.p`
	color: var(--blackColor);
	/* font */
	font-size: 1.2rem;
	font-weight: 600;
	/* attribute */
	letter-spacing: 0.5px;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		font-size: 1.25rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1rem;
	}
`;

const DescriptionText = styled.div`
	color: var(--secondTextColor);
	/* font */
	font-size: 0.9rem;
	font-weight: 400;
	/* attribute */
	line-height: 1.5;
	letter-spacing: 0.5px;
	margin-top: 1rem;
	opacity: 0.85;

	@media (max-width: 600px) {
		font-size: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
		margin-top: 0.5rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 0.75rem;
	}
`;

const GridBox = styled.div`
	width: 100%;
	border: 1px solid var(--border);
	border-radius: 0.3rem;
	padding: 2rem;
	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 7%);
	cursor: pointer;
	/* display */
	display: flex;
	flex-direction: column;

	&:hover {
		color: var(--whiteColor);
		transform: translateY(-6px);
		background: linear-gradient(to bottom, #1da8eb, #495ef2);
		transition: all 0.2s ease-in-out;
	}

	&:hover ${GridIcon} {
		filter: brightness(0) invert(1);
		transition: all 0.05s ease-in-out;
	}
	&:hover ${DescriptionText} {
		color: var(--whiteColor);
		transition: all 0.15s ease-in-out;
	}
	&:hover ${GridTitle} {
		color: var(--whiteColor);
		transition: all 0.15s ease-in-out;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		padding: 2rem 1rem;
	}
`;

export default function Services() {
	const data = [
		{
			title: "WE INSPIRE",
			description: "Facilitate entrepreneurial activity on campus",
			icon: IconMedal,
		},
		{
			title: "WE ASPIRE",
			description: "Sow the seeds of entrepreneurial leadership across all disciplines",
			icon: IconBulb,
		},
		{
			title: "WE PERSPIRE",
			description: "Bridge the gap between industry and the academic curriculum",
			icon: IconScope,
		},
		{
			title: "WE RETIRE",
			description: "Build a high-quality ecosystem on campus to support resource-strapped startup ventures",
			icon: IconGlobe,
		},
	];

	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Our Mission</HeaderComponent>
				</HeaderBox>
				<GridContainer>
					<Grid
						container
						justifyContent='center'
						spacing={{ xs: 4, md: 3, sm: 2 }}
						sx={{ display: "flex", alignItems: "stretch" }}
					>
						{data.map((item, index) => (
							<Grid
								item
								key={index}
								xs={12}
								sm={3}
								md={3}
								sx={{ display: "flex", alignItems: "stretch" }}
							>
								<GridBox>
									<GridIconBox>
										<GridIcon src={item.icon} loading='lazy' alt={item.title} />
									</GridIconBox>
									<GridTitle>{item.title}</GridTitle>
									<DescriptionText>{item.description}</DescriptionText>
								</GridBox>
							</Grid>
						))}
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
