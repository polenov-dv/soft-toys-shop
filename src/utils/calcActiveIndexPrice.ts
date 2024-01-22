import { Price as PriceModel } from "shared/models/Price";

export const calcActiveIndexPrice = (prices: PriceModel[], price: number) => {
	let result = 0;
	prices.forEach((item, index) => {
		if (price === item.value) {
			result = index;
		}
	})
	return result;
}