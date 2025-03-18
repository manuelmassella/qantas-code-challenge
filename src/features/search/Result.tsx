'use client'
import CardImage from "@/components/CardImage";
import CardInfo from "@/components/CardInfo";
import CardPrice from "@/components/CardPrice";
import Image from "next/image";
import { useEffect, useState } from "react";

const Result: React.FC = () => {

	const [result, setResult] = useState<any[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const FREE_CANCELLATION = "FREE_CANCELLATION"

	useEffect(() => {
		// Fetch JSON data from the public directory on component mount
		fetch("/api/data.json")
			.then((response) => response.json())
			.then((data) => {
				setResult(data.results)
				setLoading(false)
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="lg:container mx-auto p-4 min-h-screen min-w-[300px]">
			<header className="mb-4">
				<Image
					src="/qantas-logo.png"
					alt="Qantas Logo"
					className="h-12 w-auto"
					width={412}
					height={80}
					priority={true}
				/>
			</header>
			<main>
				<div className="md:flex justify-between items-center mb-3">
					<p className="text-2xl font-bold mb-2 md:mb-0">
						{loading
							? "Loading..."
							: <>{result.length} < span className="italic font-normal">hotels in</span> Sydney.</>
						}
					</p>
					{!loading && 
						<div className="flex gap-2 items-center">
							<label htmlFor="sort-options" className="sr-only">Sort hotels by</label>
							<p>Sort by:</p>
							<select className="text-sm border border-gray-300 rounded-md px-3 py-2">
								<option>Price (high-low)</option>
								<option>Price (low-high)</option>
							</select>
						</div>
					}
				</div>

				{!loading && result.map((item, index) => (
					<div key={index} className="flex flex-col md:flex-row gap-2 md:gap-5">
						<CardImage
							url={item?.property?.previewImage?.url}
							caption={item?.property?.previewImage?.caption}
							promotion={item?.offer?.promotion?.title}
						/>

						<div className="md:flex grow justify-between gap-[100px] pt-3 pb-2 md:border-y border-solid border-gray-200 min-w-0">
							<CardInfo
								name={item?.property?.title}
								address={item?.property?.address}
								offerName={item?.offer?.name}
								freeCancellation={item?.offer?.cancellationOption?.cancellationType === FREE_CANCELLATION}
							/>
							<CardPrice
								currency={item?.offer?.displayPrice?.currency}
								amount={item?.offer?.displayPrice?.amount}
								saving={item?.offer?.savings?.amount}
							/>
						</div>
					</div>
				))}
			</main>
		</div>
	)
}

export default Result;