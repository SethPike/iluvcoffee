import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1762974096615 } from "src/migrations/1762974096615-CoffeeRefactor";
import { SchemaSync1762978805591 } from "src/migrations/1762978805591-SchemaSync";
import { DataSource } from "typeorm";


export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1762974096615, SchemaSync1762978805591],
});