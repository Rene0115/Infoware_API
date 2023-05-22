import { DataSource } from 'typeorm';

import dotenv from 'dotenv';

dotenv.config();

  const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    entities: [],
  });

  export default dataSource;



