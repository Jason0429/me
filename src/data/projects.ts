import imageProcessingZip from '../projectzips/imageprocessing.zip';
import marbleSolitaireZip from '../projectzips/marblesolitaire.zip';
import mazePathFinderZip from '../projectzips/mazepathfinder.zip';

export type Project = {
	title?: string;
	desc?: string;
	github?: string;
	website?: string;
	download?: string;
	languages?: string[];
};

export const projects: Project[] = [
	{
		title: 'Codenames',
		desc: 'Recreated own version of the official codenames.game. First time using Firebase Database.',
		github: 'https://github.com/Jason0429/my-codenames',
		website: 'https://jason0429.github.io/my-codenames/',
		languages: ['ReactJS', 'HTML', '(S)CSS', 'Firebase']
	},
	{
		title: 'Battleship',
		desc: 'Simple battleship game against computer.',
		github: 'https://github.com/Jason0429/battleship',
		website: 'https://jason0429.github.io/battleship/',
		languages: ['HTML', 'CSS', 'JavaScript']
	},
	{
		title: 'Billion Oyster Project',
		desc: 'Learned introduction to Data Science using Python. Used real billion-oyster data.',
		github: 'https://github.com/Jason0429/billion-oyster-project/blob/master/presentation.py',
		languages: ['Python']
	},
	{
		title: 'Artful Skins',
		desc: 'Social media app prototype designed to connect tattoo artists and promote their businesses.',
		website: 'https://invis.io/3QYFQI4VWPM',
		languages: ['Figma', 'Whimsical', 'inVision']
	},
	{
		title: 'Two-Layer TicTacToe',
		desc: 'A slightly more difficult version of traditional TicTacToe played against a computer that predicts your next move.',
		github: 'https://github.com/Jason0429/two-layer-tic-tac-toe',
		website: 'https://jason0429.github.io/two-layer-tic-tac-toe/',
		languages: ['HTML', 'CSS', 'JavaScript']
	},
	// {
	// 	title: "Grade Tracker",
	// 	desc: "School Java project that keeps track of classes, assignments, and student grades.",
	// 	github: "https://github.com/Jason0429/grade-tracker-javafx",
	// 	languages: ["Java", "JavaFX GUI"]
	// },
	// {
	// 	title: "SupplyOrb",
	// 	desc: "Prototype of a platform aimed for a more ethical and sustainable future using blockchain.",
	// 	website:
	// 		"https://docs.google.com/presentation/d/1yCOZeXWucWGnGoJr4Wbwu72x-6VuRgdp/edit?usp=sharing&ouid=110437001760350789206&rtpof=true&sd=true"
	// },
	{
		title: 'Workout Tracker',
		desc: 'Web app to keep track of user workouts, templates, and exercises with Google authentication.',
		github: 'https://github.com/Jason0429/workout-tracker',
		website: 'https://jason0429.github.io/workout-tracker',
		languages: ['TypeScript', 'React', 'Firebase']
	},
	{
		title: 'Maze Path Finder',
		desc: "Uses Kruskal's algorithm to randomly generate mazes and solves path using either Breadth or Depth First Search. ",
		download: mazePathFinderZip,
		languages: ['Java', 'javalib']
	},
	{
		title: 'Marble Solitaire',
		desc: 'Terminal-based game that plays marble solitaire with the choice of a English, European, or Triangle solitaire board.',
		download: marbleSolitaireZip,
		languages: ['Java']
	},
	{
		title: 'Image Processing',
		desc: 'Text and GUI-based program based on MVC/OOD principles. Features include: flipping, greyscaling, downscaling, partial image manipulation and more.',
		download: imageProcessingZip,
		languages: ['Java', 'Swing']
	},
	{
		title: 'Decor Finishes',
		desc: 'A contracting company website for a client with a contact form page.',
		website: 'https://decorfinishes.vercel.app',
		languages: ['Next', 'EmailJS']
	}
];
