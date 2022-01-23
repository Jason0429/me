export const lightTheme: object = {
	background: "#ffffff",
	boxShadow: "#31363920",
	text: "#313639",
	paperBackground: "#ffffff",
	waveFill: "#363537"
};

export const darkTheme: object = {
	background: "#282c36",
	boxShadow: "#efefef20",
	text: "#efefef",
	paperBackground: "#393d47",
	waveFill: "#ffffff"
};

type Theme = {
	[prop: string]: object;
};

export const themes: Theme = {
	light: lightTheme,
	dark: darkTheme
};
