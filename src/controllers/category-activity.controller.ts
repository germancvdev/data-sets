import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Category,
  Activity,
} from '../models';
import {CategoryRepository} from '../repositories';

export class CategoryActivityController {
  constructor(
    @repository(CategoryRepository) protected categoryRepository: CategoryRepository,
  ) { }

  @get('/categories/{id}/activities', {
    responses: {
      '200': {
        description: 'Array of Category has many Activity',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Activity)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Activity>,
  ): Promise<Activity[]> {
    return this.categoryRepository.activities(id).find(filter);
  }

  @post('/categories/{id}/activities', {
    responses: {
      '200': {
        description: 'Category model instance',
        content: {'application/json': {schema: getModelSchemaRef(Activity)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Category.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activity, {
            title: 'NewActivityInCategory',
            exclude: ['id'],
            optional: ['categoryId']
          }),
        },
      },
    }) activity: Omit<Activity, 'id'>,
  ): Promise<Activity> {
    return this.categoryRepository.activities(id).create(activity);
  }

  @patch('/categories/{id}/activities', {
    responses: {
      '200': {
        description: 'Category.Activity PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Activity, {partial: true}),
        },
      },
    })
    activity: Partial<Activity>,
    @param.query.object('where', getWhereSchemaFor(Activity)) where?: Where<Activity>,
  ): Promise<Count> {
    return this.categoryRepository.activities(id).patch(activity, where);
  }

  @del('/categories/{id}/activities', {
    responses: {
      '200': {
        description: 'Category.Activity DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Activity)) where?: Where<Activity>,
  ): Promise<Count> {
    return this.categoryRepository.activities(id).delete(where);
  }
}
