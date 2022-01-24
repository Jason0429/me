// Material
import { Typography, Stack } from "@mui/material";

import { styled } from "@mui/material/styles";

function GradientUnderlineText2({
	text,
	fontSize,
	sx,
	thickness
}: {
	text: string;
	fontSize?: any;
	sx?: any;
	thickness?: number;
}) {
	const height: string = (thickness && thickness + "px") || "4px";

	const Underline = styled("div")`
		background-color: #abe9cd;
		background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
		height: ${height};
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

export default GradientUnderlineText2;
