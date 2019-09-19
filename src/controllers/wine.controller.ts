/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Wine} from '../models/wine.model';
import {WinePartial} from '../models/wine-partial.model';
import {NewWine} from '../models/new-wine.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by WineController
 * 
 */
export class WineController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns Wine model count
   */
  @operation('get', '/wines/count')
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
  @operation('put', '/wines/{id}')
  async replaceById(@requestBody() _requestBody: Wine, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/wines/{id}')
  async updateById(@requestBody() _requestBody: WinePartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Wine model instance
   */
  @operation('get', '/wines/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<Wine> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/wines/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns Wine model instance
   */
  @operation('post', '/wines')
  async create(@requestBody() _requestBody: NewWine): Promise<Wine> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns Wine PATCH success count
   */
  @operation('patch', '/wines')
  async updateAll(@requestBody() _requestBody: WinePartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of Wine model instances
   */
  @operation('get', '/wines')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  type?: boolean;
  name?: boolean;
  vintage?: boolean;
  id?: boolean;
  price?: boolean;
  awardText?: boolean;
  awardLevel?: boolean;
  image?: boolean;
  availability?: boolean;
  content?: boolean;
  varietal?: boolean;
  premium?: boolean;
  priority?: boolean;
  no?: boolean;
  alcohol?: boolean;
  description?: boolean;
  packagingId?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<Wine[]> {
    throw new Error('Not implemented');
  }

}

