/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Logs} from '../models/logs.model';
import {LogsPartial} from '../models/logs-partial.model';
import {NewLogs} from '../models/new-logs.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by LogsController
 * 
 */
export class LogsController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns Logs model count
   */
  @operation('get', '/logs/count')
  async count(@param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('put', '/logs/{id}')
  async replaceById(@requestBody() _requestBody: Logs, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/logs/{id}')
  async updateById(@requestBody() _requestBody: LogsPartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Logs model instance
   */
  @operation('get', '/logs/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<Logs> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/logs/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns Logs model instance
   */
  @operation('post', '/logs')
  async create(@requestBody() _requestBody: NewLogs): Promise<Logs> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns Logs PATCH success count
   */
  @operation('patch', '/logs')
  async updateAll(@requestBody() _requestBody: LogsPartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of Logs model instances
   */
  @operation('get', '/logs')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  id?: boolean;
  hostname?: boolean;
  url?: boolean;
  APIResponseTime?: boolean;
  OverallResponseTime?: boolean;
  msg?: boolean;
  time?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<Logs[]> {
    throw new Error('Not implemented');
  }

}

