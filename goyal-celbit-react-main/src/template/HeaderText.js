import React from "react";
import styled from "styled-components";

const Text = styled.h2`
	color: var(--blackColor);
	font-size: 3rem;
	font-weight: 600;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		font-size: 1.4rem;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		font-size: 1.6rem;
	}
`;

export default function Header({ children }) {
	return <Text>{children}</Text>;
}
