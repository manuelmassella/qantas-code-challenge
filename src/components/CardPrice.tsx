import React from 'react';

interface CardPriceProps {
	currency: string;
	amount: number;
	saving?: number;
}

const CardPrice: React.FC<CardPriceProps> = ({
	currency,
	amount,
	saving,
}) => {
	return (
		<div className="flex flex-col shrink-0 md:border-0 md:items-end justify-center border-t border-solid border-gray-200 pt-4 pr-2">
			<p className="text-sm mb-1">
				<span className="font-bold">1</span> night total ({currency})
			</p>
			<div className="flex items-start">
				<span className="text-2xl">$</span>
				<span className="text-4xl">{amount}</span>
			</div>
			{saving &&
				<p className="text-2xl text-qantas-red mt-2">Save ${saving}~</p>
			}
		</div>
	);
};

export default CardPrice;