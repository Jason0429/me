// Components
// import GradientUnderlineText from "./GradientUnderlineText";

// Material
import { Stack, Paper, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Styles
import { AboutProfilePic, GradientText } from "../styles/About.styles";
import { Slide, Fade } from "react-awesome-reveal";

// Data
import pfp from "../imgs/pfp.png";

function About({ theme }: { theme: any }) {
	return (
		<Stack
			direction='column'
			sx={{
				height: "100vh",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Stack
				direction='column'
				spacing={0}
				sx={{
					alignItems: "center"
				}}
			>
				{/* Profile Pic */}
				<Slide delay={500} direction='up' triggerOnce>
					<Fade delay={500} triggerOnce>
						<Paper
							elevation={0}
							variant='outlined'
							sx={{
								borderRadius: "100%",
								height: "250px",
								width: "250px",
								padding: "10px",
								background: `${theme.paperBackground}`,
								transition: "background 0.2s ease-in-out"
							}}
						>
							<AboutProfilePic src={pfp} />
						</Paper>
					</Fade>
					<br />

					{/* Greeting */}
					<Fade delay={500} triggerOnce>
						<GradientText
							fontSize={{
								lg: "3em",
								md: "2em",
								sm: "2em",
								xs: "2em"
							}}
							sx={{
								fontWeight: 200
							}}
						>
							Hi!
						</GradientText>
					</Fade>

					<Fade delay={500} triggerOnce>
						<GradientText
							fontSize={{
								lg: "2.5em",
								md: "2em",
								sm: "2em",
								xs: "2em"
							}}
							sx={{
								fontWeight: 200
							}}
						>
							{"I'm Jason :)"}
						</GradientText>
					</Fade>
				</Slide>
			</Stack>
			{/* View Projects Button */}
			<Fade delay={500} triggerOnce>
				<IconButton size='small'>
					<a
						href='#projects'
						style={{
							color: `${theme.text}`
						}}
					>
						<KeyboardArrowDownIcon />
					</a>
				</IconButton>
			</Fade>
		</Stack>
	);
}

export default About;
