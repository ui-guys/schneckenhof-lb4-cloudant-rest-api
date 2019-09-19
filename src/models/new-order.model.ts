/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewOrder
 * NewOrder
 */
@model({name: 'NewOrder'})
export class NewOrder {
  constructor(data?: Partial<NewOrder>) {
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

