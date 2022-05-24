import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Hotel, HotelRelations, Service, HotelService} from '../models';
import {HotelServiceRepository} from './hotel-service.repository';
import {ServiceRepository} from './service.repository';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.id,
  HotelRelations
> {

  public readonly services: HasManyThroughRepositoryFactory<Service, typeof Service.prototype.id,
          HotelService,
          typeof Hotel.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('HotelServiceRepository') protected hotelServiceRepositoryGetter: Getter<HotelServiceRepository>, @repository.getter('ServiceRepository') protected serviceRepositoryGetter: Getter<ServiceRepository>,
  ) {
    super(Hotel, dataSource);
    this.services = this.createHasManyThroughRepositoryFactoryFor('services', serviceRepositoryGetter, hotelServiceRepositoryGetter,);
    this.registerInclusionResolver('services', this.services.inclusionResolver);
  }
}
