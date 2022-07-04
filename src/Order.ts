import { Item } from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
	private items: Item[]
	
	constructor() {
		this.items = []
	}


	addItem(item: Item) {
		this.items.push(item)
	}

	getTotal() {
		return this.items.reduce((total, item) => total + item.price, 0)
	}

	getTaxes() {
		let taxes = 0

		for (const item of this.items) {
			if (item instanceof TaxItem) taxes += item.calculateTax()
		}

		return taxes
	}
}
