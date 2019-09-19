/* eslint-disable @typescript-eslint/no-explicit-any */
import {model, property} from '@loopback/repository';

/**
 * The model class is generated from OpenAPI schema - NewNews
 * NewNews
 */
@model({name: 'NewNews'})
export class NewNews {
  constructor(data?: Partial<NewNews>) {
    if (data != null && typeof data === 'object') {
      Object.assign(this, data);
    }
  }

  /**
   * 
   */
  @property()
  relevantFrom?: Date;

  /**
   * 
   */
  @property()
  relevantTo?: Date;

  /**
   * 
   */
  @property()
  title?: string;

  /**
   * 
   */
  @property()
  shortDescription?: string;

  /**
   * 
   */
  @property()
  description?: string;

  /**
   * 
   */
  @property()
  homePageDescription?: string;

  /**
   * 
   */
  @property()
  showOnHome?: boolean;

}

