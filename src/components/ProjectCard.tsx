// Material
import { Stack, Paper, Typography, IconButton, Tooltip, Chip } from "@mui/material";
import { GitHub, Web } from "@mui/icons-material";

// Component
import GradientUnderlineText from "./GradientUnderlineText2";

interface Project {
	title?: string;
	desc?: string;
	github?: string;
	website?: string;
	languages?: string[];
}

function ProjectCard({ project }: { project: Project }) {
	return (
		<Paper variant='outlined' sx={{ padding: 2, height: "250px", width: "250px" }}>
			<Stack direction='column' spacing={1}>
				<GradientUnderlineText
					text={project.title || "Project"}
					thickness={2}
					fontSize={{
						lg: 20,
						md: 20,
						sm: 15,
						sx: 15
					}}
				/>
				{project.desc && <Typography>{project.desc}</Typography>}
				{project.github && (
					<IconButton href={project.github} target='_blank' data-tip='See Code'>
						<GitHub />
					</IconButton>
				)}
				{project.website && (
					<IconButton href={project.website} target='_blank' data-tip='View Website'>
						<Web />
					</IconButton>
				)}
			</Stack>
		</Paper>
	);
}

export default ProjectCard;
