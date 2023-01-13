import React from "react";
import styled from "styled-components";
import { Grid, TextField } from "@mui/material";

// component
import HeaderComponent from "../template/HeaderText";

// image
import LocationDetail from "../assets/icons/location.png";
import EmailDetail from "../assets/icons/Commercial.png";

import YellowDot from "../assets/patterns/yellow.png";

// styled
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

const Dots = styled.img`
	position: absolute;
	z-index: -1;
	top: 2%;
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
	@media (min-width: 1920px) {
		width: 85%;
		margin: auto;
	}
`;

const FormContainer = styled.div``;

const FormBox = styled.div`
	margin-block: 1.5rem;

	@media (max-width: 600px) {
		margin-block: 0;
	}
`;

const TextContainer = styled.div``;

const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-block: 2rem;

	@media (max-width: 600px) {
		flex-direction: column;
		margin-block: 3rem;
	}
`;

const TextIconBox = styled.div``;

const TextIcon = styled.img`
	width: 3rem;

	@media (min-width: 601px) and (max-width: 1024px) {
		width: 2.5rem;
	}
`;

const TextBox = styled.div`
	@media (max-width: 600px) {
		text-align: center;
	}
`;

const TextLabel = styled.p`
	color: var(--blackColor);
	/* font */
	font-size: 1rem;
	font-weight: 700;
	/* attribute */
	line-height: 1.5;
	letter-spacing: 0.5px;

	@media (max-width: 600px) {
		font-size: 1.2rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
		margin-top: 0.5rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 0.75rem;
	}
`;

const TextDescription = styled.p`
	color: var(--blackColor);
	/* font */
	font-size: 0.85rem;
	font-weight: 400;
	/* attribute */
	line-height: 1.5;
	letter-spacing: 0.5px;
	opacity: 0.9;

	@media (max-width: 600px) {
		font-size: 1.1rem;
		margin-block: 0.2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.6rem;
		margin-top: 0.1rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 0.75rem;
	}
`;

const TextButton = styled.button`
	width: 100%;
	/* font */
	font-size: 1rem;
	font-weight: 600;
	/* color */
	color: var(--whiteColor);
	background: #024add;
	background: linear-gradient(90deg, #024add, #01a3f4 50%, #024add);
	/* attr */
	cursor: pointer;
	letter-spacing: 1px;
	border: none;
	border-radius: 0.3rem;
	padding-block: 0.8rem;
	margin-top: 2rem;

	&:hover {
		transform: scale(1.018);
		transition: all 0.2s ease-out;
	}
	@media (max-width: 600px) {
		padding-block: 1.2rem;
		margin-top: 1.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
		padding-block: 0.6rem;
	}
`;

const TextLink = styled.a`
	color: var(--mc3);
	font-weight: 600;
	text-decoration: underline;
`;

export default function Contact() {
	return (
		<Container id='contact'>
			<Dots src={YellowDot} alt='Yellow Dots Pattern' />

			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Contact Us</HeaderComponent>
				</HeaderBox>
				<GridContainer>
					<Grid container justifyContent='center' alignItems='center'>
						{/* Details */}
						<Grid item xs={12} sm={5} md={5}>
							<TextContainer>
								{/* Address */}
								<TextWrapper>
									<TextIconBox>
										<TextIcon src={LocationDetail} alt='CEL Location' />
									</TextIconBox>
									<TextBox>
										<TextLabel>WHERE TO MEET</TextLabel>
										<TextDescription>Center for Entrepreneurial Leadership</TextDescription>
										<TextDescription>1218, BITS Pilani</TextDescription>
										<TextDescription>Vidyavihar, Pilani</TextDescription>
										<TextDescription>Rajasthan | 333031</TextDescription>
									</TextBox>
								</TextWrapper>

								{/* Email */}
								<TextWrapper>
									<TextIconBox>
										<TextIcon src={EmailDetail} alt='CEL Location' />
									</TextIconBox>
									<TextBox>
										<TextLabel>SAY HELLO</TextLabel>
										<TextDescription>Dhruv Kedia</TextDescription>
										<TextDescription>President</TextDescription>
										<TextDescription>
											Email:&nbsp;
											<TextLink href='mailto:f20190633@pilani.bits-pilani.ac.in'>
												f20190633@pilani.bits-pilani.ac.in
											</TextLink>
										</TextDescription>
									</TextBox>
								</TextWrapper>
							</TextContainer>
						</Grid>

						{/* Form  */}
						<Grid item xs={12} sm={5} md={5}>
							<FormContainer>
								{/* Name  */}
								<FormBox>
									<TextField
										required
										label='Your Name'
										variant='outlined'
										type='text'
										fullWidth={true}
										sx={{
											marginBlock: { xs: "1rem", sm: "0", md: "0" },
										}}
									/>
								</FormBox>
								{/* Email */}
								<FormBox>
									<TextField
										required
										label='Your Email'
										variant='outlined'
										type='email'
										fullWidth={true}
										sx={{
											marginBlock: { xs: "1rem", sm: "0", md: "0" },
										}}
									/>
								</FormBox>
								{/* Message */}
								<FormBox>
									<TextField
										required
										label='Your Message'
										variant='outlined'
										type='text'
										fullWidth={true}
										multiline={true}
										rows={3}
										sx={{
											marginBlock: { xs: "1rem", sm: "0", md: "0" },
										}}
									/>
								</FormBox>
								<TextButton>SUBMIT</TextButton>
							</FormContainer>
						</Grid>
					</Grid>
				</GridContainer>
			</Wrapper>
		</Container>
	);
}
