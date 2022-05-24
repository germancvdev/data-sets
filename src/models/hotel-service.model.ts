import {Entity, model, property} from '@loopback/repository';

@model()
export class HotelService extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  hotelId?: string;

  @property({
    type: 'string',
  })
  serviceId?: string;

  constructor(data?: Partial<HotelService>) {
    super(data);
  }
}

export interface HotelServiceRelations {
  // describe navigational properties here
}

export type HotelServiceWithRelations = HotelService & HotelServiceRelations;
