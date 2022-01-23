// Components
import ProjectCard from "./ProjectCard";
import GradientUnderlineText from "./GradientUnderlineText";
// import { BlueUnderline } from "../styles/ProjectsSection.styles";

// Material
import { Stack } from "@mui/material";

// Hooks
// import { useWindowSize } from "../hooks";

// Data
import { projects } from "../data/projects";

function ProjectsSection({ theme }: { theme: any }) {
	return (
		<Stack
			id='projects'
			direction='column'
			sx={{
				minHeight: "100vh"
			}}
		>
			{/* My Project title */}
			<Stack
				direction='row'
				sx={{
					width: "100%",
					padding: "20px 0",
					justifyContent: "center"
				}}
			>
				<GradientUnderlineText
					text='My Projects'
					fontSize={{
						lg: "3em",
						md: "2.5em",
						sm: "2em",
						xs: "2em"
					}}
					sx={{
						fontWeight: 200,
						color: `${theme.text}`
					}}
				/>
			</Stack>

			{/* Projects Row */}
			<Stack
				direction='row'
				sx={{
					justifyContent: "center"
					// alignItems: "center",
					// border: "thin solid black"
				}}
			>
				<Stack
					direction='row'
					sx={{
						width: "80%",
						flexWrap: "wrap",
						gap: 2,
						alignItems: "center",
						justifyContent: "center"
						// border: "thin solid black"
					}}
				>
					{projects.map((p, key) => (
						<ProjectCard project={p} key={key} />
					))}
				</Stack>
			</Stack>
		</Stack>
	);
}

export default ProjectsSection;
