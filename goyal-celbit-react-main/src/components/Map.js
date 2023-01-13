import React from "react";
import styled from "styled-components";

// component
import HeaderComponent from "../template/HeaderText";

// styles
const Container = styled.section`
	position: relative;
	/* attr */
	padding-block: 7rem;
	background-color: #f6f6f6;

	@media (max-width: 600px) {
		padding-block: 3rem;
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

const MapContainer = styled.div`
	height: 35rem;
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
	border: 1px solid #e3e3e3;

	@media (max-width: 600px) {
		height: 20rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		height: 22rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		height: 30rem;
	}
	@media (min-width: 1920px) {
		width: 80%;
		margin: auto;
	}
`;

export default function Map() {
	return (
		<Container>
			<Wrapper>
				<HeaderBox>
					<HeaderComponent>Find Us At</HeaderComponent>
				</HeaderBox>
				<MapContainer>
					<iframe
						width='100%'
						height='100%'
						id='maps'
						title='maps'
						src='https://maps.google.com/maps?q=Birla%20Institute%20Of%20Technology%20And%20Science%E2%80%93Pilani%20(BITS%E2%80%93Pilani)&t=&z=15&ie=UTF8&iwloc=&output=embed'
						frameBorder='0'
						scrolling='no'
						marginHeight='0'
						marginWidth='0'
					/>
				</MapContainer>
			</Wrapper>
		</Container>
	);
}
