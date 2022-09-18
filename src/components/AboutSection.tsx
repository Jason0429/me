// Components

// Material
import { Stack, Paper, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Styles
import { AboutProfilePic, GradientText, AboutProfilePicWrapper } from '../styles/About.styles';
import { Slide, Fade } from 'react-awesome-reveal';
import '../styles/animations.css';

// Data
import pfp from '../imgs/pfp_new.jpg';

function AboutSection({ theme, themeMode }: { theme: any; themeMode: string }) {
	return (
		<Stack
			direction='column'
			sx={{
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Stack
				direction='column'
				spacing={0}
				sx={{
					alignItems: 'center'
				}}
			>
				{/* Profile Pic */}
				<Slide delay={500} direction='up' triggerOnce>
					<Fade delay={500} triggerOnce>
						<Paper
							elevation={0}
							variant='outlined'
							sx={{
								borderRadius: '100%',
								height: '250px',
								width: '250px',
								padding: '10px',
								background: `${theme.paperBackground}`,
								transition: 'background 0.2s ease-in-out'
							}}
						>
							<AboutProfilePicWrapper>
								<AboutProfilePic src={pfp} />
							</AboutProfilePicWrapper>
						</Paper>
					</Fade>
					<br />

					{/* Greeting */}
					<Fade delay={500} triggerOnce>
						{themeMode === 'dark' ? (
							<Typography
								fontSize={{
									lg: '3em',
									md: '2em',
									sm: '2em',
									xs: '2em'
								}}
								sx={{
									fontWeight: 100,
									color: 'white'
								}}
							>
								Hi!
							</Typography>
						) : (
							<GradientText
								fontSize={{
									lg: '3em',
									md: '2em',
									sm: '2em',
									xs: '2em'
								}}
								sx={{
									fontWeight: 100
								}}
							>
								Hi!
							</GradientText>
						)}
					</Fade>

					<Fade delay={500} triggerOnce>
						{themeMode === 'dark' ? (
							<Typography
								fontSize={{
									lg: '3em',
									md: '2em',
									sm: '2em',
									xs: '2em'
								}}
								sx={{
									fontWeight: 100,
									color: 'white'
								}}
							>
								{"I'm Jason :)"}
							</Typography>
						) : (
							<GradientText
								fontSize={{
									lg: '3em',
									md: '2em',
									sm: '2em',
									xs: '2em'
								}}
								sx={{
									fontWeight: 100
								}}
							>
								{"I'm Jason :)"}
							</GradientText>
						)}
					</Fade>
				</Slide>
			</Stack>
			<br />
			{/* View Projects Button */}
			<Fade delay={500} triggerOnce>
				<IconButton size='small' href='#projects' className='bounce'>
					<KeyboardArrowDownIcon
						sx={{
							color: `${theme.text}`
						}}
					/>
				</IconButton>
			</Fade>
		</Stack>
	);
}

export default AboutSection;
