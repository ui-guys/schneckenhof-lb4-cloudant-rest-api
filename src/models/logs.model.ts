/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Logs
 * Logs
 */
@model({name: 'Logs'})
export class Logs {
  constructor(data?: Partial<Logs>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property()
  id?: string;

  /**
   * 
   */
  @property()
  hostname?: string;

  /**
   * 
   */
  @property()
  url?: string;

  /**
   * 
   */
  @property()
  APIResponseTime?: {
  
};

  /**
   * 
   */
  @property()
  OverallResponseTime?: string;

  /**
   * 
   */
  @property()
  msg?: string;

  /**
   * 
   */
  @property()
  time?: Date;

}

