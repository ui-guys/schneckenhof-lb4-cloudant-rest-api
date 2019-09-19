/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Resource} from '../models/resource.model';
import {ResourcePartial} from '../models/resource-partial.model';
import {NewResource} from '../models/new-resource.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by ResourceController
 * 
 */
export class ResourceController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns Resource model count
   */
  @operation('get', '/resources/count')
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
  @operation('put', '/resources/{id}')
  async replaceById(@requestBody() _requestBody: Resource, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/resources/{id}')
  async updateById(@requestBody() _requestBody: ResourcePartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Resource model instance
   */
  @operation('get', '/resources/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<Resource> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/resources/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns Resource model instance
   */
  @operation('post', '/resources')
  async create(@requestBody() _requestBody: NewResource): Promise<Resource> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns Resource PATCH success count
   */
  @operation('patch', '/resources')
  async updateAll(@requestBody() _requestBody: ResourcePartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of Resource model instances
   */
  @operation('get', '/resources')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  id?: boolean;
  resourceId?: boolean;
  weblinkUrl?: boolean;
  originalFilename?: boolean;
  type?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<Resource[]> {
    throw new Error('Not implemented');
  }

}

