import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const AboutProfilePicWrapper = styled('div')`
	height: 250px;
	width: 250px;
	overflow: hidden;
	border-radius: 100%;
`;

export const AboutProfilePic = styled('img')`
	height: 100%;
	width: 100%;

	transform: scale(1.5);
	object-position: bottom;
`;

export const GradientText = styled(Typography)`
	/* background-color: #abe9cd;
	background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%); */
	background-color: #2a2a72;
	background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
