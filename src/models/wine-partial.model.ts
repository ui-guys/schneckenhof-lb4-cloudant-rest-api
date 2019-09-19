/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - WinePartial
 * WinePartial
 */
@model({name: 'WinePartial'})
export class WinePartial {
  constructor(data?: Partial<WinePartial>) {
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
  name?: string;

  /**
   * 
   */
  @property()
  vintage?: string;

  /**
   * 
   */
  @property()
  id?: string;

  /**
   * 
   */
  @property()
  price?: number;

  /**
   * 
   */
  @property()
  awardText?: string;

  /**
   * 
   */
  @property()
  awardLevel?: string;

  /**
   * 
   */
  @property()
  image?: string;

  /**
   * 
   */
  @property()
  availability?: boolean;

  /**
   * 
   */
  @property()
  content?: number;

  /**
   * 
   */
  @property()
  varietal?: string;

  /**
   * 
   */
  @property()
  premium?: boolean;

  /**
   * 
   */
  @property()
  priority?: boolean;

  /**
   * 
   */
  @property()
  no?: number;

  /**
   * 
   */
  @property()
  alcohol?: number;

  /**
   * 
   */
  @property()
  description?: string;

  /**
   * 
   */
  @property()
  packagingId?: string;

}

