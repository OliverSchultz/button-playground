import styled from "styled-components/macro";
import { useState } from "react";

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
		hover: "#e59500",
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
	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`;

Button.defaultProps = {
	theme: "blue",
};

function clickMe() {
	alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
	opacity: 0.7;
	${({ active }) =>
		active &&
		`
opacity: 1;
`}
`;

const types = ["Cash", "Credit Card", "Bitcoin"];

function ToggleGroup() {
	const [active, setActive] = useState(types[0]);
	return (
		<>
			<div>
				{types.map((type) => (
					<ButtonToggle
						active={active === type}
						onClick={() => setActive(type)}
					>
						{type}
					</ButtonToggle>
				))}
			</div>

			<p> Your payment selection: {active} </p>
		</>
	);
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
			<div>
				<Button disabled onClick={clickMe}>
					Button
				</Button>
			</div>
			<div>
				<a href="http://google.com" target="_blank" rel="noreferrer">
					<Button>Link</Button>
				</a>
			</div>
			<ToggleGroup />
		</>
	);
}
