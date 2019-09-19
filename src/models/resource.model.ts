/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Resource
 * Resource
 */
@model({name: 'Resource'})
export class Resource {
  constructor(data?: Partial<Resource>) {
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
  resourceId?: string;

  /**
   * 
   */
  @property()
  weblinkUrl?: string;

  /**
   * 
   */
  @property()
  originalFilename?: string;

  /**
   * 
   */
  @property()
  type?: string;

}

