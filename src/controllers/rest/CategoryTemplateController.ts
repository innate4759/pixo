import { Controller, Get, Post, Put, Delete, PathParams, Req, Session, BodyParams } from '@tsed/common';
import { Inject } from '@tsed/di';
import { Returns, Summary } from '@tsed/schema';

import { CategoryTemplateService } from '../../services/CategoryTemplateService';
import { CategoryVO } from '../../models/Categories';
import { TemplatesVO } from '../../models/Templates';

@Controller('/')
export class CategoryTemplateController {
	@Inject()
	categoryTemplateService: CategoryTemplateService


	@Summary('Category 전체 리스트 조회')
	@Returns(200, Array).Of(CategoryVO)
	@Get('/categories')
	async getCategories(): Promise<CategoryVO[]> {
		return await this.categoryTemplateService.getAllCategories();
	}

	@Returns(201, CategoryVO)
	@Post('/categories')
	createCategory(@BodyParams('name') name: string): CategoryVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(201, CategoryVO)
	@Put('/categories/:id')
	updateCategory(@PathParams('id') id: string, @BodyParams('name') name: string): CategoryVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(200, CategoryVO)
	@Get('/categories/:id')
	getCategoryById(@PathParams('id') id: string): CategoryVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(204)
	@Delete('/categories/:id')
	deleteCategory(@PathParams('id') id: string) {
		return true
	}


	@Summary('Template 전체 리스트 조회')
	@Returns(200, Array).Of(TemplatesVO)
	@Get('/templates')
	getTemplates(): TemplatesVO[] {
		return [];
	}

	@Returns(201, TemplatesVO)
	@Post('/templates')
	createTemplate(@BodyParams('name') name: string): TemplatesVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(201, TemplatesVO)
	@Put('/templates/:id')
	updateTemplate(@PathParams('id') id: string, @BodyParams('name') name: string): TemplatesVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(200, TemplatesVO)
	@Get('/templates/:id')
	getTemplateById(@PathParams('id') id: string): TemplatesVO {
		return {id: 'idddd', name:'name'}
	}

	@Returns(204)
	@Delete('/templates/:id')
	deleteTemplate(@PathParams('id') id: string) {
		return true
	}

}