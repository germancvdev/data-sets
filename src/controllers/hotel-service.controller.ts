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
Hotel,
HotelService,
Service,
} from '../models';
import {HotelRepository} from '../repositories';

export class HotelServiceController {
  constructor(
    @repository(HotelRepository) protected hotelRepository: HotelRepository,
  ) { }

  @get('/hotels/{id}/services', {
    responses: {
      '200': {
        description: 'Array of Hotel has many Service through HotelService',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Service)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Service>,
  ): Promise<Service[]> {
    return this.hotelRepository.services(id).find(filter);
  }

  @post('/hotels/{id}/services', {
    responses: {
      '200': {
        description: 'create a Service model instance',
        content: {'application/json': {schema: getModelSchemaRef(Service)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Hotel.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {
            title: 'NewServiceInHotel',
            exclude: ['id'],
          }),
        },
      },
    }) service: Omit<Service, 'id'>,
  ): Promise<Service> {
    return this.hotelRepository.services(id).create(service);
  }

  @patch('/hotels/{id}/services', {
    responses: {
      '200': {
        description: 'Hotel.Service PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Service, {partial: true}),
        },
      },
    })
    service: Partial<Service>,
    @param.query.object('where', getWhereSchemaFor(Service)) where?: Where<Service>,
  ): Promise<Count> {
    return this.hotelRepository.services(id).patch(service, where);
  }

  @del('/hotels/{id}/services', {
    responses: {
      '200': {
        description: 'Hotel.Service DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Service)) where?: Where<Service>,
  ): Promise<Count> {
    return this.hotelRepository.services(id).delete(where);
  }
}
