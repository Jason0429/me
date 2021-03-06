// Material
import { Stack, Paper, Typography, IconButton, Tooltip, Chip } from "@mui/material";
import { GitHub, Web } from "@mui/icons-material";
import { Project } from "../data/projects";
import DownloadIcon from "@mui/icons-material/Download";

// Component
import GradientUnderlineText from "./GradientUnderlineText2";

function ProjectCard({ project, theme }: { project: Project; theme: any }) {
	return (
		<Paper
			variant='outlined'
			sx={{
				padding: 2,
				height: "250px",
				width: "250px",
				background: `${theme.paperBackground}`,
				transition: "background 0.2s ease-in-out"
			}}
		>
			<Stack direction='column' spacing={1}>
				{/* Project title */}
				<GradientUnderlineText
					text={project.title || "Project"}
					thickness={2}
					fontSize={{
						lg: 20,
						md: 20,
						sm: 15,
						sx: 15
					}}
					sx={{
						color: `${theme.text}`
					}}
				/>
				{/* Project description */}
				{project.desc && (
					<Typography
						sx={{
							color: `${theme.text}`
						}}
					>
						{project.desc}
					</Typography>
				)}
				{/* Project GitHub and/or Website */}
				<Stack
					direction='row'
					spacing={2}
					sx={{
						flexWrap: "wrap",
						maxWidth: "100%"
					}}
				>
					{project.download && (
						<Tooltip title='Download Code'>
							<IconButton href={project.download} data-tip='Download Code'>
								<DownloadIcon
									sx={{
										color: `${theme.text}`
									}}
								/>
							</IconButton>
						</Tooltip>
					)}
					{project.github && (
						<Tooltip title='GitHub'>
							<IconButton href={project.github} target='_blank' data-tip='See Code'>
								<GitHub
									sx={{
										color: `${theme.text}`
									}}
								/>
							</IconButton>
						</Tooltip>
					)}
					{project.website && (
						<Tooltip title='Website'>
							<IconButton
								href={project.website}
								target='_blank'
								data-tip='View Website'
							>
								<Web
									sx={{
										color: `${theme.text}`
									}}
								/>
							</IconButton>
						</Tooltip>
					)}
				</Stack>
				{/* Project languages */}
				{project.languages && (
					<Stack
						direction='row'
						spacing={0}
						sx={{
							flexWrap: "wrap",
							gap: 1,
							maxWidth: "100%"
						}}
					>
						{project.languages.map((l: string, key: number) => (
							<Chip
								label={l}
								variant='filled'
								key={key}
								sx={{
									color: `${theme.text}`
								}}
							/>
						))}
					</Stack>
				)}
			</Stack>
		</Paper>
	);
}

export default ProjectCard;
