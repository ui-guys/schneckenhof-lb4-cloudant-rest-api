/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewLogs
 * NewLogs
 */
@model({name: 'NewLogs'})
export class NewLogs {
  constructor(data?: Partial<NewLogs>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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

