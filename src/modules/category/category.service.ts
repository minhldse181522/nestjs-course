import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getCategoryService() {
    const categories = await this.prisma.category.findMany({
      select: {
        id: true,
        categoryName: true,
        description: true,
        votingEnabled: true,
      },
    });

    return categories.map((category) => ({
      id: category.id.toString(),
      categoryName: category.categoryName,
      description: category.description,
      enabled: category.votingEnabled,
    }));
  }

  async createCategoryService(
    categories: { categoryName: string; description?: string }[],
  ) {
    const createdCategories = [];

    const performances = await this.prisma.performance.findMany({
      select: { id: true },
    });

    for (const { categoryName, description } of categories) {
      const category = await this.prisma.category.create({
        data: { categoryName, description },
      });

      const categoryData = {
        id: category.id.toString(),
        categoryName: category.categoryName,
        description: category.description,
      };

      const dataToInsert = performances.map((per) => ({
        category_id: Number(categoryData.id),
        performance_id: per.id,
        vote: 0,
      }));

      await this.prisma.performanceCategory.createMany({
        data: dataToInsert,
        skipDuplicates: true,
      });

      createdCategories.push(categoryData);
    }

    return createdCategories;
  }

  async updateCategoryService(
    id: string,
    categoryName?: string,
    description?: string,
  ) {
    const category = await this.prisma.category.update({
      where: { id: Number(id) },
      data: {
        categoryName,
        description,
      },
    });

    return {
      id: category.id.toString(),
      categoryName: category.categoryName,
      description: category.description,
    };
  }

  async deleteCategoryService(id: string) {
    return await this.prisma.category.delete({
      where: { id: Number(id) },
    });
  }

  async getAllCategoryIds(): Promise<number[]> {
    const categories = await this.prisma.category.findMany({
      select: { id: true },
    });
    return categories.map((cat) => Number(cat.id));
  }
}
