/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - OrderPartial
 * OrderPartial
 */
@model({name: 'OrderPartial'})
export class OrderPartial {
  constructor(data?: Partial<OrderPartial>) {
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
  @property()
  created?: Date;

  /**
   * 
   */
  @property()
  completed?: Date;

}

