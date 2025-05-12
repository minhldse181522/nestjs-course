import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PerformanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService,
  ) {}

  // Chỉ lấy performances
  async getPerformanceService() {
    const performances = await this.prisma.performance.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return performances.map((performance) => ({
      id: performance.id.toString(),
      name: performance.name,
    }));
  }

  // Lấy performance theo category
  async getPerformancesByCategoryService(categoryId: number) {
    const performanceCate = await this.prisma.performanceCategory.findMany({
      where: { category_id: BigInt(categoryId) },
      select: {
        performances: { select: { id: true, name: true } },
        vote: true,
      },
    });
    return performanceCate.map((performance) => ({
      id: performance.performances.id.toString(),
      name: performance.performances.name,
      vote: performance.vote,
    }));
  }

  async createPerformanceService(performances: { name: string }[]) {
    const createdPerformances = [];

    for (const { name } of performances) {
      const performance = await this.prisma.performance.create({
        data: { name },
      });

      const performanceData = {
        id: performance.id.toString(),
        name: performance.name,
      };

      const categoryIds = await this.categoryService.getAllCategoryIds();

      const dataToInsert = categoryIds.map((id) => ({
        performance_id: Number(performanceData.id),
        category_id: id,
        vote: 0,
      }));

      await this.prisma.performanceCategory.createMany({
        data: dataToInsert,
        skipDuplicates: true,
      });

      createdPerformances.push(performanceData);
    }

    return createdPerformances;
  }

  async updatePerformanceService(id: string, name?: string) {
    const performance = await this.prisma.performance.update({
      where: { id: Number(id) },
      data: {
        name,
      },
    });
    return {
      id: performance.id.toString(),
      name: performance.name,
    };
  }

  async deletePerformanceService(id: string) {
    return await this.prisma.performance.delete({
      where: { id: Number(id) },
    });
  }
}
