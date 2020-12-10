import styled from "styled-components/macro";

const Button = styled.button`
	background-color: #3949ab;
	color: white;
	padding: 5px 15px;
	border-radius: 5px;
	outline: 0;
	box-shadow: 0px 5px 5px lightgray;
`;

function clickMe() {
	alert("You clicked me!");
}

export default function App() {
	return (
		<div className="App">
			<h2>Button-playground</h2>
			<Button onClick={clickMe}>Button</Button>
		</div>
	);
}
