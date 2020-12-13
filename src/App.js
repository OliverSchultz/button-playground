import styled from "styled-components/macro";

const theme = {
	blue: {
		default: "#3f51b5",
		hover: "#283593",
	},
	pink: {
		default: "#e91e63",
		hover: "#ad1457",
	},
	yellow: {
		default: "#f3de2c",
		hover: "#fb6107",
	},
};

const Button = styled.button`
	background-color: ${(props) => theme[props.theme].default};
	color: white;
	padding: 5px 15px;
	border-radius: 5px;
	outline: 0;
	text-transform: uppercase;
	margin: 10px 0px;
	cursor: pointer;
	box-shadow: 0px 5px 5px lightgray;
	transition: ease background-color 500ms;
	&:hover {
		background-color: ${(props) => theme[props.theme].hover};
	}
`;

Button.defaultProps = {
	theme: "blue",
};

function clickMe() {
	alert("You clicked me!");
}

export default function App() {
	return (
		<>
			<div>
				<h2>Button-playground</h2>
				<Button onClick={clickMe}>Button</Button>
			</div>
			<div>
				<Button theme="pink" onClick={clickMe}>
					Button
				</Button>
			</div>
			<div>
				<Button theme="yellow" onClick={clickMe}>
					Button
				</Button>
			</div>
		</>
	);
}
