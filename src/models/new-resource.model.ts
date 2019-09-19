/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewResource
 * NewResource
 */
@model({name: 'NewResource'})
export class NewResource {
  constructor(data?: Partial<NewResource>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

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

