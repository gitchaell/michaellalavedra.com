export class Developer {
	name: DeveloperName | null = null

	constructor(name: string) {
		this.name = new DeveloperName(name)
	}
}

export class DeveloperName {
	value: string | null = null

	constructor(value: string) {
		this.value = value
	}
}
