import React from "react";

//create your first component
const Home = (props) => {
	let { seconds } = props;

	let counter = {
		a: Math.floor(seconds / 100000),
		b: Math.floor(seconds / 10000),
		c: Math.floor(seconds / 1000),
		d: Math.floor(seconds / 100),
		e: Math.floor(seconds / 10),
		f: Math.floor(seconds / 1),
	};
	return (
		<div className="d-flex justify-content-center font-weight-bold bg-dark roundedm m-5">
			<div className="h1 bg-secondary rounded m-1 display-2">
				<i className="far fa-clock"></i>
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.a % 10}
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.b % 10}
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.c % 10}
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.d % 10}
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.e % 10}
			</div>
			<div className="h1 bg-secondary rounded m-1 display-2">
				{counter.f % 10}
			</div>
		</div>
	);
};

export default Home;
