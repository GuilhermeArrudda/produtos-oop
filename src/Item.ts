import TaxItem from "./TaxItem";

export abstract class Item {
	public description: string
	public price: number

	constructor (description: string, price: number) {
		this.description = description
		this.price = price;
	}
}

export class Beer extends TaxItem {
	constructor(description: string, price: number){
		super(description, price)
	}

	public getTax(): number {
		return 0.2
	}
}

export class Cigar extends TaxItem {
	constructor(description: string, price: number){
		super(description, price)
	}

	public getTax(): number {
		return 0.25
	}
}

export class Electronics extends TaxItem {
	constructor(description: string, price: number){
		super(description, price)
	}

	public getTax(): number {
		return 0.3
	}
}

export class Water extends TaxItem {
	constructor(description: string, price: number){
		super(description, price)
	}

	public getTax(): number {
		return 0
	}
}