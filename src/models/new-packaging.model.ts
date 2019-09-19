/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewPackaging
 * NewPackaging
 */
@model({name: 'NewPackaging'})
export class NewPackaging {
  constructor(data?: Partial<NewPackaging>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property()
  displayName?: string;

  /**
   * 
   */
  @property()
  measure?: string;

  /**
   * 
   */
  @property()
  unitOfMeasure?: string;

}

