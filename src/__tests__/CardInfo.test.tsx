import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import CardInfo from "@/components/CardInfo";

describe("CardInfo Component", () => {
	it("renders hotel name, address, and offer", () => {
		render(
			<CardInfo
				name="Hotel A"
				address={["123 Main Street", "City"]}
				offerName="Deluxe Room"
				freeCancellation={false}
				rating={{ ratingValue: 4.5, ratingType: "self" }}
			/>
		);

		expect(screen.getByText("Hotel A")).toBeInTheDocument();
		expect(screen.getByText("123 Main Street, City")).toBeInTheDocument();
		expect(screen.getByText("Deluxe Room")).toBeInTheDocument();
	});

	it("displays 'Free Cancellation' when freeCancellation is true", () => {
		render(
			<CardInfo
				name="Hotel A"
				address={["123 Main Street", "City"]}
				offerName="Deluxe Room"
				freeCancellation={true}
				rating={{ ratingValue: 4.5, ratingType: "self" }}
			/>
		);

		expect(screen.getByText("Free Cancellation")).toBeInTheDocument();
	});
});