import React from 'react';

interface StarProps {
	position: number;
	totValue: number;
}

const Star: React.FC<StarProps> = ({
	position,
	totValue,
}) => {

	const classes = position <= totValue 
		? "text-qantas-yellow" // Full star
		: position - 0.5 <= totValue 
			? "star-half" // Half star
			: "text-gray-300"	// Empty star


	return (
		<div className={`text-2xl mx-[1px] ${classes}`}>&#9733;</div>
	);
};

export default Star;