import axios from 'axios';
import { Ware as WareModel } from 'shared/models/Ware';
import { User as UserModel } from 'shared/models/User';

export default class WareService {

	static async createPriceWare(ware: WareModel, index: number) {
		try {
			await axios.put(`http://localhost:8000/goods/${ware.id}`, {
				id: ware.id,
				likes: ware.likes,
				stars: ware.stars,
				filter: ware.filter,
				catalog: ware.catalog,
				name: ware.name,
				description: ware.description,
				image_url: ware.image_url,
				comments: ware.comments,
				prices: ware.prices,
				price: ware.prices[index].value,
				size: ware.prices[index].size,
				count: 0
			});
		} catch (err) {
		}
	}

	static async createUser(user: UserModel) {
		try {
			axios.post(`http://localhost:8000/users`, {
				id: user.id,
				name: user.name,
				email: user.email,
				password: user.password
			});
		} catch (err) {
		}
	}

	static async createComment(ware: WareModel) {
		try {
			await axios.put(`http://localhost:8000/goods/${ware.id}`, {
				id: ware.id,
				likes: ware.likes,
				stars: ware.stars,
				filter: ware.filter,
				catalog: ware.catalog,
				name: ware.name,
				description: ware.description,
				image_url: ware.image_url,
				comments: ware.comments,
				prices: ware.prices,
				price: ware.price,
				size: ware.size,
				count: 0
			});
		} catch (err) {
		}
	}

}