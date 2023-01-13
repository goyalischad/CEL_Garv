import React from "react";
import styled from "styled-components";

// style
const Container = styled.section`
	padding-block: 4rem;
	background: #024add;
	background: linear-gradient(90deg, #024add, #01a3f4 50%, #024add);

	@media (max-width: 600px) {
		padding-block: 4rem;
	}
`;

const Wrapper = styled.div`
	/* display */
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* width */
	width: 85%;
	margin: auto;

	@media (max-width: 600px) {
		width: 90%;
		flex-direction: column;
		justify-content: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const TextBox = styled.div`
	width: 100%;

	@media (max-width: 600px) {
		text-align: center;
		margin-bottom: 4rem;
	}
`;

const HeaderText = styled.h2`
	color: var(--whiteColor);
	/* font */
	font-size: 1.6rem;
	font-weight: 600;
	/* attribute */
	letter-spacing: 0.5px;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		font-size: 1.3rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.8rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1rem;
	}
`;

const DescriptionText = styled.p`
	color: var(--whiteColor);
	/* font */
	font-size: 1rem;
	font-weight: 400;
	/* attribute */
	text-transform: capitalize;
	letter-spacing: 0.5px;
	opacity: 0.9;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		font-size: 1rem;
		align-items: center;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 0.75rem;
	}
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;

	@media (max-width: 600px) {
		justify-content: center;
	}
`;

const Button = styled.a`
	/* color */
	color: var(--whiteColor);
	/* attr */
	border-radius: 0.3rem;
	border: 1px solid var(--whiteColor);
	padding: 0.8rem 1.5rem;

	&:hover {
		border: 1px solid transparent;
		background: #ffdd00;
		background: linear-gradient(90deg, #fbb034, #fbb034 50%, #ffdd00);
		color: var(--blackColor);
		transition: all 0.2s ease-out;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 0.7rem;
		padding: 0.5rem 1rem;
	}
`;

export default function SmallBanner() {
	return (
		<Container>
			<Wrapper>
				<TextBox>
					<HeaderText>CONQUEST LIVE ON CNBC</HeaderText>
					<DescriptionText>11-SEP-2023</DescriptionText>
				</TextBox>
				<ButtonWrapper>
					<Button
						href='https://www.youtube.com/watch?v=I61yzJqzbf0&feature=youtu.be'
						target='_blank'
						rel='noopener noreferrer'
					>
						Watch Now!
					</Button>
				</ButtonWrapper>
			</Wrapper>
		</Container>
	);
}
