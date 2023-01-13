import React from "react";
import styled from "styled-components";

// style
const Container = styled.section`
	padding-block: 6rem;
	background: #ffdd00;
	background: linear-gradient(90deg, #fbb034, #fbb034 50%, #ffdd00);

	@media (max-width: 600px) {
		padding-block: 4rem;
	}
	@media (min-width: 1920px) {
		padding-block: 8rem;
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
	width: 70%;
	text-align: center;
	margin: auto;

	@media (max-width: 600px) {
		width: 100%;
		text-align: center;
		margin-bottom: 4rem;
	}
`;

const HeaderText = styled.h2`
	color: var(--blackColor);
	/* font */
	font-size: 2.7rem;
	font-weight: 600;
	/* attribute */
	letter-spacing: 0.5px;
	margin-top: 0.5rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.5rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 2rem;
	}
`;

export default function SmallBanner() {
	return (
		<Container>
			<Wrapper>
				<TextBox>
					<HeaderText>Center for Entrepreneurial Leadership (CEL) is a Center for Excellence</HeaderText>
				</TextBox>
			</Wrapper>
		</Container>
	);
}
