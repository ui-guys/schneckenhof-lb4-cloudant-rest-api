/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {Order} from '../models/order.model';
import {OrderPartial} from '../models/order-partial.model';
import {NewOrder} from '../models/new-order.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by OrderController
 * 
 */
export class OrderController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns Order model count
   */
  @operation('get', '/orders/count')
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
  @operation('put', '/orders/{id}')
  async replaceById(@requestBody() _requestBody: Order, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/orders/{id}')
  async updateById(@requestBody() _requestBody: OrderPartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns Order model instance
   */
  @operation('get', '/orders/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<Order> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/orders/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns Order model instance
   */
  @operation('post', '/orders')
  async create(@requestBody() _requestBody: NewOrder): Promise<Order> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns Order PATCH success count
   */
  @operation('patch', '/orders')
  async updateAll(@requestBody() _requestBody: OrderPartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of Order model instances
   */
  @operation('get', '/orders')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  type?: boolean;
  email?: boolean;
  total?: boolean;
  id?: boolean;
  details?: boolean;
  created?: boolean;
  completed?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<Order[]> {
    throw new Error('Not implemented');
  }

}

