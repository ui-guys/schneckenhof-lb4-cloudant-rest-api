/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - ResourcePartial
 * ResourcePartial
 */
@model({name: 'ResourcePartial'})
export class ResourcePartial {
  constructor(data?: Partial<ResourcePartial>) {
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

