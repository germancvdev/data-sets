import {Entity, model, property, hasMany} from '@loopback/repository';
import {Service} from './service.model';
import {HotelService} from './hotel-service.model';

@model()
export class Hotel extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
    default: 0,
  })
  price?: number;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  images?: string[];

  @hasMany(() => Service, {through: {model: () => HotelService}})
  services: Service[];

  constructor(data?: Partial<Hotel>) {
    super(data);
  }
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
