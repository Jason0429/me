// Material
import { Typography, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

function GradientUnderlineText({ text, fontSize, sx }: { text: string; fontSize?: any; sx?: any }) {
	const Underline = styled("div")`
		background-color: #abe9cd;
		background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
		height: 4px;
		border-radius: 5px;
		width: 100%;
	`;
	return (
		<Stack direction='column' spacing={0}>
			<Typography sx={sx} fontSize={fontSize}>
				{text}
			</Typography>
			<Underline />
		</Stack>
	);
}

export default GradientUnderlineText;
