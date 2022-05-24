import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Service} from '../models';
import {ServiceRepository} from '../repositories';

export class ServiceController {
  constructor(
    @repository(ServiceRepository)
    public serviceRepository : ServiceRepository,
  ) {}

  @post('/services')
  @response(200, {
    description: 'Service model instance',
    content: {'application/json': {schema: getModelSchemaRef(Service)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {
            title: 'NewService',
            exclude: ['id'],
          }),
        },
      },
    })
    service: Omit<Service, 'id'>,
  ): Promise<Service> {
    return this.serviceRepository.create(service);
  }

  @get('/services/count')
  @response(200, {
    description: 'Service model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Service) where?: Where<Service>,
  ): Promise<Count> {
    return this.serviceRepository.count(where);
  }

  @get('/services')
  @response(200, {
    description: 'Array of Service model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Service, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Service) filter?: Filter<Service>,
  ): Promise<Service[]> {
    return this.serviceRepository.find(filter);
  }

  @patch('/services')
  @response(200, {
    description: 'Service PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {partial: true}),
        },
      },
    })
    service: Service,
    @param.where(Service) where?: Where<Service>,
  ): Promise<Count> {
    return this.serviceRepository.updateAll(service, where);
  }

  @get('/services/{id}')
  @response(200, {
    description: 'Service model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Service, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Service, {exclude: 'where'}) filter?: FilterExcludingWhere<Service>
  ): Promise<Service> {
    return this.serviceRepository.findById(id, filter);
  }

  @patch('/services/{id}')
  @response(204, {
    description: 'Service PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {partial: true}),
        },
      },
    })
    service: Service,
  ): Promise<void> {
    await this.serviceRepository.updateById(id, service);
  }

  @put('/services/{id}')
  @response(204, {
    description: 'Service PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() service: Service,
  ): Promise<void> {
    await this.serviceRepository.replaceById(id, service);
  }

  @del('/services/{id}')
  @response(204, {
    description: 'Service DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.serviceRepository.deleteById(id);
  }
}
