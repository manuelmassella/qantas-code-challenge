import Image from "next/image";
import React from 'react';

interface CardImageProps {
	url: string;
	caption: string;
	promotion: string;
}

const CardImage: React.FC<CardImageProps> = ({
	url,
	caption,
	promotion,
}) => {
	return (
		<div className="w-full max-h-[200px] md:w-3/12 min-w-[145] relative flex justify-center items-center shrink-0 aspect-[145/125] md:my-3 bg-gray-200">
			{promotion &&
				<span className="absolute top-2 left-0 bg-white text-qantas-red text-sm font-bold p-2">{promotion}</span>
			}
			<Image
				src={url}
				alt={caption}
				className="object-cover w-full h-full"
				width={145}
				height={125}
				unoptimized={true}
			/>
		</div>
	);
};

export default CardImage;