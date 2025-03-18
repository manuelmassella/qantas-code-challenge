import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from "@testing-library/react";
import Result from "@/features/search/Result";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				results: [
					{
						property: {
							title: "Hotel A",
							previewImage: { url: "image-a.jpg", caption: "Image A" },
							address: ["123 Main Street", "City A"],
							rating: {
								ratingValue: 4.5,
								ratingType: "self"
							},
						},
						offer: {
							displayPrice: { amount: 200, currency: "USD" },
							promotion: { title: "Promo A" },
							name: "Deluxe Room",
							savings: { amount: 20 },
							cancellationOption: { cancellationType: "FREE_CANCELLATION" },
						},
					},
					{
						property: {
							title: "Hotel B",
							previewImage: { url: "image-b.jpg", caption: "Image B" },
							address: ["123 Main Street", "City B"],
							rating: {
								ratingValue: 4.5,
								ratingType: "self"
							},
						},
						offer: {
							displayPrice: { amount: 100, currency: "USD" },
							promotion: { title: "Promo B" },
							name: "Standard Room",
							savings: { amount: 10 },
							cancellationOption: { cancellationType: "FREE_CANCELLATION" },
						},
					},
				],
			}),
	})
) as jest.Mock;

describe("Result Component", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("sorts hotels by price (low-high)", async () => {
		await act(async () => {
			render(<Result />);
		});

		// Use findByText to wait for the data to load
		await screen.findByText("Hotel A");

		// Select "Price (low-high)" from the dropdown
		const select = screen.getByLabelText("Sort hotels by");
		act(() => {
			fireEvent.change(select, { target: { value: "low" } });
		});

		// Check the order of the hotels
		const hotelTitles = screen.getAllByRole("heading", { level: 3 });
		expect(hotelTitles[0]).toHaveTextContent("Hotel B"); // Hotel B has a lower price
		expect(hotelTitles[1]).toHaveTextContent("Hotel A");
	});

	it("sorts hotels by price (high-low)", async () => {
		await act(async () => {
			render(<Result />);
		});

		// Use findByText to wait for the data to load
		await screen.findByText("Hotel A");

		// Select "Price (high-low)" from the dropdown
		const select = screen.getByLabelText("Sort hotels by");
		act(() => {
			fireEvent.change(select, { target: { value: "high" } });
		});

		// Check the order of the hotels
		const hotelTitles = screen.getAllByRole("heading", { level: 3 });
		expect(hotelTitles[0]).toHaveTextContent("Hotel A"); // Hotel A has a higher price
		expect(hotelTitles[1]).toHaveTextContent("Hotel B");
	});
});