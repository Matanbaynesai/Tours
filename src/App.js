import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
	const [loading, setLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};
	const getTours = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const data = await res.json();
			setTours(data);
			setLoading(false);
		} catch (error) {
			console.error("Getting data failed");
		}
	};
	console.log(tours);
	useEffect(() => {
		getTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
					<button className="btn" onClick={getTours}>Refresh</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<Tours getTours={getTours} removeTour={removeTour} data={tours} />
		</main>
	);
}

export default App;
