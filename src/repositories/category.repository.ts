import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Category, CategoryRelations, Activity} from '../models';
import {ActivityRepository} from './activity.repository';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id,
  CategoryRelations
> {

  public readonly activities: HasManyRepositoryFactory<Activity, typeof Category.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ActivityRepository') protected activityRepositoryGetter: Getter<ActivityRepository>,
  ) {
    super(Category, dataSource);
    this.activities = this.createHasManyRepositoryFactoryFor('activities', activityRepositoryGetter,);
    this.registerInclusionResolver('activities', this.activities.inclusionResolver);
  }
}
