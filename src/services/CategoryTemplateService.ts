import { Service } from '@tsed/di'
import { CategoryRepository } from '../repositories/CategoryRepository'
import { CategoryVO } from '../models/Categories';


@Service()
export class CategoryTemplateService {
	constructor(
		private categoryRepository: CategoryRepository
	) {}

	async getAllCategories(): Promise<CategoryVO[]> {
		return (await this.categoryRepository.find()).map(it => it.toVO());
	}

	async saveCategory() {
		
	}

}