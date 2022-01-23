import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const GradientText = styled(Typography)`
	background-color: #abe9cd;
	background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
