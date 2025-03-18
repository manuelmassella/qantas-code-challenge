import React from 'react';

interface CardInfoProps {
	name: string;
	address: string[];
	offerName: string;
	freeCancellation: boolean;
}

const CardInfo: React.FC<CardInfoProps> = ({
	name,
	address,
	offerName,
	freeCancellation,
}) => {
	return (
		<div className="flex flex-col justify-between min-w-0 mb-2 md:mb-0">
			<div>
				<div className="md:flex gap-2">
					<h3 className="font-medium text-2xl text-ellipsis overflow-hidden whitespace-nowrap">
						{name}
					</h3>
					<div className="bg-amber-300 shrink-0 px-5">
						Rating System
					</div>
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