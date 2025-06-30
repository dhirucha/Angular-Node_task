import { DataSource } from "typeorm";
import { product } from "./entity/product";

 const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "231211",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [product],
});

export { AppDataSource };