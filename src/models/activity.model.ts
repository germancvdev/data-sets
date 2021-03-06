import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Category} from './category.model';

@model()
export class Activity extends Entity {
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

  @property({
    type: 'date',
  })
  date?: string;

  @belongsTo(() => Category)
  categoryId: string;

  constructor(data?: Partial<Activity>) {
    super(data);
  }
}

export interface ActivityRelations {
  // describe navigational properties here
}

export type ActivityWithRelations = Activity & ActivityRelations;
