import React from "react";
import styled from "styled-components";
import {
	SwipeableDrawer,
	List,
	ListItem,
	IconButton,
	Divider,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";

// Material icons
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Main Styling

// style
const MobileButtonLink = styled.a`
	width: 100%;
	border-radius: 0.2rem;
`;

const AccordionCustomWrapper = styled.div`
	width: 100%;
`;

const MobileButton = styled.button`
	/* color */
	color: var(--buttonHover);
	/* font */
	font-size: 1rem;
	font-weight: 500;
	background: transparent;
	display: flex;
	align-items: center;
	border: none;
	letter-spacing: 0.5px;
	margin: 0.5rem 0;
	padding: 0.5rem 0;
	width: 100%;
	cursor: pointer;
`;

export default function SwipeableDrawerMobileWithDropdown({ drawer, setDrawer }) {
	// Drawer Handler for Tablet and Mobile device
	const drawerHandlerClose = (drawer) => {
		setDrawer(!drawer);
	};

	// Accordion Option (DropDown Menu)
	const showAccordion = () => {
		return (
			<Accordion
				sx={{
					border: "none",
					boxShadow: "none",
					padding: "0",
					margin: "0",
					backgroundColor: "transparent",
					color: "var(--whiteColor)",
				}}
			>
				<AccordionSummary
					sx={{ padding: "0" }}
					expandIcon={<ExpandMoreIcon sx={{ color: "var(--whiteColor)" }} />}
				>
					<MobileButton>Projects</MobileButton>
				</AccordionSummary>
				<AccordionDetails>
					<List>
						<ListItem>
							<MobileButtonLink href='http://conquest.org.in/'>
								<MobileButton onClick={drawerHandlerClose}>CONQUEST</MobileButton>
							</MobileButtonLink>
						</ListItem>
						<Divider sx={{ backgroundColor: "var(--whiteColor)" }} />
						<ListItem>
							<MobileButtonLink href='http://celbits.org.in/sis.html'>
								<MobileButton onClick={drawerHandlerClose}>SIS</MobileButton>
							</MobileButtonLink>
						</ListItem>
						<Divider sx={{ backgroundColor: "var(--whiteColor)" }} />
						<ListItem>
							<MobileButtonLink href='http://celbits.org.in/red.html'>
								<MobileButton onClick={drawerHandlerClose}>RED</MobileButton>
							</MobileButtonLink>
						</ListItem>
						<Divider sx={{ backgroundColor: "var(--whiteColor)" }} />
						<ListItem>
							<MobileButtonLink href='http://celbits.org.in/eweek.html'>
								<MobileButton onClick={drawerHandlerClose}>E-WEEK</MobileButton>
							</MobileButtonLink>
						</ListItem>
					</List>
				</AccordionDetails>
			</Accordion>
		);
	};

	return (
		<SwipeableDrawer
			anchor='right'
			open={drawer}
			onOpen={drawerHandlerClose}
			onClose={drawerHandlerClose}
			PaperProps={{
				sx: {
					width: 290,
					background: "var(--nav)",
					borderRadius: "2rem 0 0 2rem",
					color: "var(--whiteColor)",
					// background: "linear-gradient(140deg,#024add,#01a3f4 50%,#024add)",
				},
			}}
		>
			<List sx={{ width: 280 }}>
				<ListItem sx={{ justifyContent: "flex-end" }}>
					<IconButton onClick={drawerHandlerClose}>
						<CloseIcon
							sx={{
								borderRadius: "50%",
								background: "var(--buttonHover)",
								color: "var(--whiteColor)",
								fontSize: "2rem",
								padding: ".2rem",
							}}
						/>
					</IconButton>
				</ListItem>

				{/* Home */}
				<ListItem>
					<MobileButtonLink href='/'>
						<MobileButton onClick={drawerHandlerClose}>Home</MobileButton>
					</MobileButtonLink>
				</ListItem>
				<Divider sx={{ width: "80%", margin: "auto", backgroundColor: "var(--whiteColor)" }} />
				{/* Projects */}
				<ListItem>
					<AccordionCustomWrapper>{showAccordion()}</AccordionCustomWrapper>
				</ListItem>
				<Divider sx={{ width: "80%", margin: "auto", backgroundColor: "var(--whiteColor)" }} />
				{/*  Contact Us */}
				<ListItem>
					<MobileButtonLink href='#contact'>
						<MobileButton onClick={drawerHandlerClose}>Contact</MobileButton>
					</MobileButtonLink>
				</ListItem>
			</List>
		</SwipeableDrawer>
	);
}
