import { Developer } from '@/server/core/developer/domain/Developer'

export class DeveloperMother {
	static create(name: string): Developer {
		return new Developer(name)
	}
}
