import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
	public items: Item[]
	
	constructor() {
		this.items = []
	}


	addItem(item: Item) {
		this.items.push(item)
	}

	getTotal() {
		let sum = 0

		this.items.forEach((item) => sum += item.price)

		return sum
	}

	getTaxes() {
		let taxes = 0

		for (const item of this.items) {
			if (item instanceof TaxItem) taxes += item.calculateTax()
		}

		return taxes
	}
}
