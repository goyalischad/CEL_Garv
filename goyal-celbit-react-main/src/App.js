import React from "react";
import styled from "styled-components";

// shared component
import NavBar from "./shared/Navbar";
import SocialBar from "./shared/SocialBar";
import Footer from "./shared/Footer";

// components
import HeroSection from "./components/Hero";
import BannerSection from "./components/SmallBanner";
import CardSection from "./components/Cards";
import AboutSection from "./components/About";
import BigBanner from "./components/BigBanner";
import ProjectSection from "./components/Project";
import SliderSection from "./components/Slider";
import VideoSection from "./components/Video";
import MapSection from "./components/Map";
import ContactSection from "./components/Contact";

// style
const Container = styled.main`
	position: relative;
	z-index: 0;
`;

function App() {
	return (
		<>
			<NavBar />

			<Container>
				<SocialBar />
				<HeroSection />
				<BannerSection />
				<CardSection />
				<AboutSection />
				<BigBanner />
				<ProjectSection />
				<SliderSection />
				<VideoSection />
				<MapSection />
				<ContactSection />
			</Container>
			<Footer />
		</>
	);
}

export default App;
