// React
import { useState, useEffect } from "react";

// Components
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Navbar from "./components/Navbar";

// Material
import { Stack } from "@mui/material";
import Wave from "react-wavify";
import { themes } from "./styles/theme";

// Hooks
import { useWindowSize } from "./hooks";

function App() {
	const [themeMode, setThemeMode] = useState<string>(
		localStorage.getItem("themeMode") || "light"
	);
	const [theme, setTheme] = useState<any>(themes[themeMode]);
	const [width] = useWindowSize();

	/**
	 * Change the theme object
	 * every time themeMode changes.
	 */
	useEffect(() => {
		setTheme(themes[themeMode]);
	}, [themeMode]);

	/**
	 * Toggles theme and updates local storage.
	 */
	function toggleTheme() {
		if (themeMode === "light") {
			setThemeMode("dark");
			localStorage.setItem("themeMode", "dark");
		} else {
			setThemeMode("light");
			localStorage.setItem("themeMode", "light");
		}
	}

	return (
		<Stack
			direction='column'
			sx={{
				background: `${theme.background}`,
				transition: "background 0.2s ease-in-out"
			}}
		>
			{/* Navbar */}
			<Navbar theme={theme} themeMode={themeMode} toggleTheme={toggleTheme} />
			{/* Wave */}
			<Wave
				style={{
					position: "fixed",
					bottom: 0,
					left: 0,
					width: "100%",
					height: `${width >= 768 ? "10%" : "15%"}`,
					zIndex: 100,
					padding: 0,
					margin: 0,
					transition: "all 0.2s ease-in-out"
				}}
				fill={theme.waveFill}
				paused={false}
				options={{
					height: 20,
					amplitude: 50,
					speed: 0.2,
					points: 5
				}}
			/>
			{/* About Section */}
			<AboutSection theme={theme} themeMode={themeMode} />

			{/* Projects Section */}
			<ProjectsSection theme={theme} themeMode={themeMode} />
		</Stack>
	);
}

export default App;
