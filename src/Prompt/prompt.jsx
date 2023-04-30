import React, { useState } from "react";
// An input box for the user to enter a prompt that will be sent to chatgpt api and the response will be put in a box under your prompt (not a chat like interface, just a prompt and a response box) the response box changes after every prompt
// Dependencies: React, Prompt.css
// Usage: Used in App.js

export default function Prompt(props) {
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState("");

	const handleChange = (event) => {
		setPrompt(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setResponse("Loading...");
		fetch("https://chatgpt-api7.p.rapidapi.com/ask", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"X-RapidAPI-Key": "26d869a8aamshbb869db6e100138p16165djsnff34a30aa61e",
				"X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
			},
			body: JSON.stringify({ prompt: prompt }),
		})
			.then((res) => res.json())
			.then((data) => {
				setResponse(data.response);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="prompt">
			<form onSubmit={handleSubmit}>
				<label>
					Prompt:
					<input type="text" value={prompt} onChange={handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div className="response">{response}</div>
		</div>
	);
}
