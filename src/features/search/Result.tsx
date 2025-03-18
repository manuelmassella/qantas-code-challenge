import Image from "next/image";

const Result: React.FC = () => {
	return (
		<div className="lg:container mx-auto p-4 min-h-screen">
			<header className="mb-4">
				<Image
					src="/qantas-logo.png"
					alt="Qantas Logo"
					className="h-12 w-auto"
					width={412}
					height={80}
				/>
			</header>
			<main>
				<div className="md:flex justify-between items-center mb-3">
					<p className="text-2xl font-bold mb-2 md:mb-0">
						5 <span className="italic font-normal">hotels in</span> Sydney.
					</p>
					<div className="flex gap-2 items-center">
						<p>Sort by:</p>
						<select className="text-sm border border-gray-300 rounded-md px-3 py-2">
							<option>Price (high-low)</option>
							<option>Price (low-high)</option>
						</select>
					</div>
				</div>

				{Array.from({ length: 5 }).map((item, index) => (
					<div key={index} className="flex flex-col md:flex-row gap-2 md:gap-5">

						<div className="w-full max-h-[200px] md:w-3/12 min-w-[145] relative flex justify-center items-center aspect-[145/125] md:my-3 bg-gray-200">
							<span className="absolute top-2 left-0 bg-white text-qantas-red text-sm font-bold p-2">Exclusive Deal</span>
							{/* <img
								src="https://unsplash.it/145/125/?random"
								alt="Hotel"
								className="object-cover w-full h-full" /> */}
							<Image
								src="https://unsplash.it/145/125/?random"
								alt="Hotel"
								className="object-cover w-full h-full"
								width={145}
								height={125}
								unoptimized={true}
							/>
						</div>

						<div className="md:flex grow justify-between gap-[100px] pt-3 pb-2 md:border-y border-solid border-gray-200 min-w-0">
							<div className="flex flex-col justify-between min-w-0">
								<div className="mb-2 md:mb-0">
									<div className="md:flex gap-2">
										<h3 className="font-medium text-2xl text-ellipsis overflow-hidden whitespace-nowrap">Courtyard by Marriott Sydney-North Ryde</h3>
										<div className="bg-amber-300 shrink-0 px-5">Rating System</div>
									</div>
									<p className="text-qantas-gray mb-2 md:mb-3">7-11 Talavera Rd, North Ryde</p>
									<a href="#" className="text-qantas-red underline">Deluxe Balcony Room</a>
								</div>
								<p className="text-qantas-green mb-2 md:mb-0">Free cancellation</p>
							</div>
							<div className="flex flex-col shrink-0 md:border-0 md:items-end justify-center border-t border-solid border-gray-200 pt-4 pr-2">
								<p className="text-sm mb-1">
									<span className="font-bold">1</span> night total (AUD)
								</p>
								<div className="flex items-start">
									<span className="text-2xl">$</span>
									<span className="text-4xl">150</span>
								</div>
								<p className="text-2xl text-qantas-red mt-2">Save $30~</p>
							</div>
						</div>
					</div>
				))}
			</main>
		</div>
	)
}

export default Result;