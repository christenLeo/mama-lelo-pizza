import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export class BaseDataBase {
  protected static connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        multipleStatements: true
    }
  });

  protected async get (table:string): Promise<unknown> {
    try {
        const result = await BaseDataBase.connection(table);
        return result;
    } 
    catch (error: any) {
        return error.message;
    }
  }
};