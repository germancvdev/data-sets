import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {HotelService, HotelServiceRelations} from '../models';

export class HotelServiceRepository extends DefaultCrudRepository<
  HotelService,
  typeof HotelService.prototype.id,
  HotelServiceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(HotelService, dataSource);
  }
}
