/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Order
 * Order
 */
@model({name: 'Order'})
export class Order {
  constructor(data?: Partial<Order>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property()
  type?: string;

  /**
   * 
   */
  @property()
  email?: string;

  /**
   * 
   */
  @property()
  total?: string;

  /**
   * 
   */
  @property()
  id?: string;

  /**
   * 
   */
  @property()
  details?: {
  
};

  /**
   * 
   */
  @property({required: true})
  created: Date;

  /**
   * 
   */
  @property()
  completed?: Date;

}

