import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.categoryService.getCategoryService();
  }

  @Post()
  @ApiBody({ type: [CreateCategoryDto] })
  async createCategories(@Body() categories: CreateCategoryDto[]) {
    return this.categoryService.createCategoryService(categories);
  }

  @Put(':id')
  @ApiBody({ type: UpdateCategoryDto })
  async updateCategory(
    @Param('id') id: string,
    @Body() body: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategoryService(
      id,
      body.categoryName,
      body.description,
    );
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategoryService(id);
  }
}
