import React from 'react';
import Circle from "./rating/Circle";
import Star from "./rating/Star";

interface RatingProps {
	value: number;
	type: string;
}

const Rating: React.FC<RatingProps> = ({
	value,
	type,
}) => {

	return (
		<div className="flex items-center">
			{Array.from({ length: 5 }).map((item, index) => {
				return (
					type === "self"
						? <Circle key={index} position={index + 1} totValue={value} />
						: <Star key={index} position={index + 1} totValue={value} />
				);
			})}
		</div>
	);
};

export default Rating;