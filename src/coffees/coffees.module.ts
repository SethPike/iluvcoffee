import { /*(2) Injectable,*/ Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity/event.entity';
import { COFFEE_BRANDS } from './coffees.contants';
/* import { DataSource } from 'typeorm'; */


/*(1)
class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}
*/

/*(2)
@Injectable()
export class CoffeeBrandsFactory {
    create() {
        return ['buddy brew', 'nescafe']
    }
}
*/

@Module({ 
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController], 
    providers: [
        CoffeesService,
/*(1)
        CoffeeBrandsFactory,
        {
            provide: ConfigService,
            useClass: process.env.NODE_ENV === 'development' 
            ? DevelopmentConfigService 
            : ProductionConfigService,
        },
*/        
        { 
            provide: COFFEE_BRANDS,
            useFactory: () => ['buddy brew', 'nescafe'],
/*(3)            
            useFactory: async (datasource: DataSource): Promise<string[]> => {
                const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']), 
*/                
            scope: Scope.TRANSIENT,
/*(3)
                console.log('[!] Async factory');
                return coffeeBrands;
*/
/*(2)
            useFactory: (brandsFactory: CoffeeBrandsFactory) =>
            brandsFactory.create(),
            inject: [CoffeeBrandsFactory]
*/
        },
/*(3)
        inject: [DataSource]      
    },
*/
    ],
    exports: [CoffeesService],
})
export class CoffeesModule {}
