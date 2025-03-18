import React from 'react';
import Rating from "@/components/Rating";

interface RatingProps {
	ratingValue: number;
	ratingType: string;
}
interface CardInfoProps {
	name: string;
	address: string[];
	offerName: string;
	freeCancellation: boolean;
	rating: RatingProps;
}

const CardInfo: React.FC<CardInfoProps> = ({
	name,
	address,
	offerName,
	freeCancellation,
	rating,
}) => {
	return (
		<div className="flex flex-col justify-between min-w-0 mb-2 md:mb-0">
			<div>
				<div className="md:flex gap-2">
					<h3 className="font-medium text-2xl text-ellipsis overflow-hidden whitespace-nowrap" title={name}>
						{name}
					</h3>
					<Rating
						value={rating.ratingValue}
						type={rating.ratingType}
					/>
				</div>
				<p className="text-qantas-gray mb-2 md:mb-3">
					{address.join(", ")}
				</p>
				<a href="#" className="text-qantas-red underline">
					{offerName}
				</a>
			</div>
			{freeCancellation && 
				<p className="text-qantas-green">
					Free Cancellation
				</p>
			}
		</div>
	);
};

export default CardInfo;