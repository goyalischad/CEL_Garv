import React, { useState } from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Menu, MenuItem } from "@mui/material";

// shared components
import SwipeBar from "./SwipeBar";

// icons
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import LogoPath from "../assets/logo/logo.png";

// styles
const MainContainer = styled.section`
	position: relative;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 88%;
	margin: auto;

	@media (max-width: 600px) {
		width: 100%;
		padding-block: 0.5rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
	@media (min-width: 1025px) and (max-width: 1439px) {
		width: 88%;
	}
`;

const Logo = styled.a``;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;

const ImageWrapper = styled.div``;

const LogoImage = styled.img`
	width: 6.5rem;
	height: 100%;
	object-fit: cover;
	display: flex;

	@media (max-width: 600px) {
		width: 6rem;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 6rem;
	}
`;

const DesktopWrapper = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 1024px) {
		display: none;
	}
`;

const ButtonLink = styled.a`
	margin: 0 0.3rem;
	padding: 0.5rem 0;
	border-radius: 0.2rem;
`;

const ButtonTheme = styled.button`
	font-size: 1rem;
	font-weight: 300;
	background: transparent;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	letter-spacing: 0.5;
	padding: 0.6rem 0.8rem;
`;

const DesktopButton = styled(ButtonTheme)`
	background: transparent;
	color: var(--whiteColor);

	&:hover {
		color: var(--blackColor);
		background: var(--whiteColor);
		transition: all 0.2s ease-in-out;
	}
`;

// Mobile Style
const MobileWrapper = styled.div`
	display: none;
	@media (max-width: 1024px) {
		display: flex;
	}
`;

export default function NavBar() {
	const [drawer, setDrawer] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<MainContainer>
			<AppBar
				position='fixed'
				elevation={2}
				sx={{
					background: "linear-gradient(90deg,#024add,#01a3f4 50%,#024add)",
				}}
			>
				<Toolbar>
					<Wrapper>
						<LogoWrapper>
							<Logo href='/'>
								<ImageWrapper>
									<div>
										<LogoImage src={LogoPath} alt='Logo' height='64' width='64' />
									</div>
								</ImageWrapper>
							</Logo>
						</LogoWrapper>

						<DesktopWrapper>
							<ButtonLink href='/'>
								<DesktopButton>Home</DesktopButton>
							</ButtonLink>

							<ButtonLink
								id='basic-button'
								aria-controls={open ? "basic-menu" : undefined}
								aria-haspopup='true'
								aria-expanded={open ? "true" : undefined}
								onClick={handleClick}
							>
								<DesktopButton>Projects</DesktopButton>
							</ButtonLink>

							<ButtonLink href='#about'>
								<DesktopButton>About</DesktopButton>
							</ButtonLink>

							<ButtonLink href='#contact'>
								<DesktopButton>Contact</DesktopButton>
							</ButtonLink>
						</DesktopWrapper>

						<MobileWrapper onClick={() => setDrawer(true)} style={{ cursor: "pointer" }}>
							<MenuOpenIcon sx={{ fontSize: "2.5rem", color: "var(--whiteColor)" }} />
						</MobileWrapper>
					</Wrapper>

					{/* Swipeable Drawer for Mobile and Tablet View */}
					<SwipeBar drawer={drawer} setDrawer={setDrawer} />
				</Toolbar>
				{/* Menu */}
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					disableScrollLock={true}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
				>
					<MenuItem onClick={handleClose}>
						<a href='http://conquest.org.in/'>CONQUEST</a>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<a href='http://celbits.org.in/sis.html'>SIS</a>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<a href='http://celbits.org.in/red.html'>RED</a>
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<a href='http://celbits.org.in/eweek.html'>E-WEEK</a>
					</MenuItem>
				</Menu>
			</AppBar>
		</MainContainer>
	);
}
