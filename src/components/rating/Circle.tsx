import React from 'react';

interface CircleProps {
	position: number;
	totValue: number;
}

const Circle: React.FC<CircleProps> = ({
	position,
	totValue,
}) => {

	const classes = position <= totValue 
		? "bg-qantas-yellow" // Full circle
		: position - 0.5 <= totValue 
			? "bg-gradient-to-r from-qantas-yellow from-50% to-gray-300 to-50%" // Half circle
			: "bg-gray-300"	// Empty circle


	return (
		<div className={`w-4 h-4 mx-[2px] rounded-full ${classes}`}></div>
	);
};

export default Circle;