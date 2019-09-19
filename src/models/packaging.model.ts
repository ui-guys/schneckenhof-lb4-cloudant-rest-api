/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - Packaging
 * Packaging
 */
@model({name: 'Packaging'})
export class Packaging {
  constructor(data?: Partial<Packaging>) {
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

  /**
   * 
   */
  @property()
  id?: string;

}

