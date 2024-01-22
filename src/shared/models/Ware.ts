import { Comment } from "./Comment";
import { Price } from "./Price";

export interface Ware {
	id: number;
	likes: number;
	stars: number;
	filter: string;
	catalog: string;
	name: string;
	description: string;
	image_url: string;
	comments: Comment[];
	prices: Price[];
	price: number;
	size: number;
	count: number
}