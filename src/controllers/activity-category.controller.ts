import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Activity,
  Category,
} from '../models';
import {ActivityRepository} from '../repositories';

export class ActivityCategoryController {
  constructor(
    @repository(ActivityRepository)
    public activityRepository: ActivityRepository,
  ) { }

  @get('/activities/{id}/category', {
    responses: {
      '200': {
        description: 'Category belonging to Activity',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Category)},
          },
        },
      },
    },
  })
  async getCategory(
    @param.path.string('id') id: typeof Activity.prototype.id,
  ): Promise<Category> {
    return this.activityRepository.category(id);
  }
}
