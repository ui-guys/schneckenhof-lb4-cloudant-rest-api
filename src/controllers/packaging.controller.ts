/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Packaging} from '../models/packaging.model';
import {PackagingPartial} from '../models/packaging-partial.model';
import {NewPackaging} from '../models/new-packaging.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by PackagingController
 * 
 */
export class PackagingController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns Packaging model count
   */
  @operation('get', '/packagings/count')
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
  @operation('put', '/packagings/{id}')
  async replaceById(@requestBody() _requestBody: Packaging, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/packagings/{id}')
  async updateById(@requestBody() _requestBody: PackagingPartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Packaging model instance
   */
  @operation('get', '/packagings/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<Packaging> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/packagings/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns Packaging model instance
   */
  @operation('post', '/packagings')
  async create(@requestBody() _requestBody: NewPackaging): Promise<Packaging> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns Packaging PATCH success count
   */
  @operation('patch', '/packagings')
  async updateAll(@requestBody() _requestBody: PackagingPartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of Packaging model instances
   */
  @operation('get', '/packagings')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  displayName?: boolean;
  measure?: boolean;
  unitOfMeasure?: boolean;
  id?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<Packaging[]> {
    throw new Error('Not implemented');
  }

}

