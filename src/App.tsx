// React
import { useState, useEffect } from "react";

// Components
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

// Material
import { Stack } from "@mui/material";
import Wave from "react-wavify";
// import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./styles/theme";
// import { useTheme } from "@mui/styles";

function App() {
	// const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || false);
	const [themeMode, setThemeMode] = useState<string>(
		localStorage.getItem("themeMode") || "light"
	);
	const [theme, setTheme] = useState<any>(themes[themeMode]);

	/**
	 * Change the theme object
	 * every time themeMode changes.
	 */
	useEffect(() => {
		setTheme(themes[themeMode]);
	}, [themeMode]);

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
				background: `${theme.background}`
			}}
		>
			{/* Wave */}
			<Wave
				style={{
					position: "fixed",
					bottom: 0,
					left: 0,
					width: "100%",
					height: "10%",
					zIndex: 2,
					padding: 0,
					margin: 0
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
			<AboutSection toggleTheme={toggleTheme} theme={theme} />

			{/* Projects Section */}
			<ProjectsSection theme={theme} />
		</Stack>
	);
}

export default App;
