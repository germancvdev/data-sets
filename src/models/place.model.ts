import {Entity, model, property} from '@loopback/repository';

@model()
export class Place extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

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

  constructor(data?: Partial<Place>) {
    super(data);
  }
}

export interface PlaceRelations {
  // describe navigational properties here
}

export type PlaceWithRelations = Place & PlaceRelations;
