import React from "react";
import Tour from "./Tour";
const Tours = ({ data }) => {
  console.log(data);
	return (
		<section>
			<div className="title">
				<h2>Ours Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
				{data.map((item) => {
					return <Tour key={item.id} {...item}></Tour>
				})}
			</div>
		</section>
	);
};

export default Tours;
