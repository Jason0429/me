// Material
import { Paper, Stack, IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

// PDFs
import resume from "../pdfs/resume.pdf";

// Hooks
import { useWindowSize } from "../hooks";

function Navbar({
	theme,
	themeMode,
	toggleTheme
}: {
	theme: any;
	themeMode: string;
	toggleTheme: () => void;
}) {
	const [width] = useWindowSize();

	return (
		<Paper
			variant='outlined'
			elevation={0}
			sx={{
				zIndex: 101,
				borderRadius: "5px",
				position: "fixed",
				boxSizing: "border-box",
				padding: "10px",
				right: "10px",
				top: `${width >= 768 ? "50%" : ""}`,
				bottom: `${width >= 768 ? "" : "5px"}`,
				left: `${width >= 768 ? "" : "50%"}`,
				transform: "translate(-50%, -50%)",
				background: `${theme.paperBackground}`,
				width: `${width >= 768 ? "auto" : "90%"}`,
				transition: "background 0.2s ease-in-out"
			}}
		>
			<Stack
				direction={width >= 768 ? "column" : "row"}
				spacing={5}
				sx={{
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
					width: "100%"
				}}
			>
				<Tooltip title={themeMode === "light" ? "View Dark Mode" : "View Light Mode"}>
					<IconButton size='small' onClick={toggleTheme}>
						{themeMode === "light" ? (
							<Brightness4Icon
								style={{
									color: `${theme.text}`
								}}
							/>
						) : (
							<Brightness7Icon
								style={{
									color: `${theme.text}`
								}}
							/>
						)}
					</IconButton>
				</Tooltip>
				<Tooltip title='Github'>
					<IconButton href='https://github.com/Jason0429' target='_blank' size='small'>
						<GitHubIcon
							style={{
								color: `${theme.text}`
							}}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title='LinkedIn'>
					<IconButton
						size='small'
						href='https://www.linkedin.com/in/jason-cheung-0429/'
						target='_blank'
					>
						<LinkedInIcon
							style={{
								color: `${theme.text}`
							}}
						/>
					</IconButton>
				</Tooltip>
				<Tooltip title='Resume'>
					<IconButton
						size='small'
						href={resume}
						rel='noopener noreferrer'
						target='_blank'
					>
						<DescriptionIcon
							sx={{
								color: `${theme.text}`
							}}
						/>
					</IconButton>
				</Tooltip>
			</Stack>
		</Paper>
	);
}

export default Navbar;
