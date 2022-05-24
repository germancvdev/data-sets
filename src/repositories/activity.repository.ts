import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Activity, ActivityRelations, Category} from '../models';
import {CategoryRepository} from './category.repository';

export class ActivityRepository extends DefaultCrudRepository<
  Activity,
  typeof Activity.prototype.id,
  ActivityRelations
> {

  public readonly category: BelongsToAccessor<Category, typeof Activity.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('CategoryRepository') protected categoryRepositoryGetter: Getter<CategoryRepository>,
  ) {
    super(Activity, dataSource);
    this.category = this.createBelongsToAccessorFor('category', categoryRepositoryGetter,);
    this.registerInclusionResolver('category', this.category.inclusionResolver);
  }
}
