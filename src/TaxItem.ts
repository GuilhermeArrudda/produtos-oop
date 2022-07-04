import { Item } from "./Item";

export default abstract class TaxItem extends Item {
	constructor(description: string, price: number) {
		super(description, price)
	}

	public abstract getTax(): number

	public calculateTax() {
		return this.getTax() * this.price
	}
}