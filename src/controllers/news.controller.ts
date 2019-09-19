/* eslint-disable @typescript-eslint/no-explicit-any */
import {operation, param, requestBody} from '@loopback/rest';
import {News} from '../models/news.model';
import {NewsPartial} from '../models/news-partial.model';
import {NewNews} from '../models/new-news.model';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by NewsController
 * 
 */
export class NewsController {
  constructor() {}

  /**
   * 
   * 

   * @param where 
   * @returns News model count
   */
  @operation('get', '/news/count')
  async count(@param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('put', '/news/{id}')
  async replaceById(@requestBody() _requestBody: News, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param id 
   */
  @operation('patch', '/news/{id}')
  async updateById(@requestBody() _requestBody: NewsPartial, @param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   * @returns News model instance
   */
  @operation('get', '/news/{id}')
  async findById(@param({name: 'id', in: 'path'}) id: string): Promise<News> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param id 
   */
  @operation('delete', '/news/{id}')
  async deleteById(@param({name: 'id', in: 'path'}) id: string): Promise<any> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @returns News model instance
   */
  @operation('post', '/news')
  async create(@requestBody() _requestBody: NewNews): Promise<News> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param _requestBody 
   * @param where 
   * @returns News PATCH success count
   */
  @operation('patch', '/news')
  async updateAll(@requestBody() _requestBody: NewsPartial, @param({name: 'where', in: 'query'}) where: {
  
}): Promise<{
  count?: number;
}> {
    throw new Error('Not implemented');
  }

  /**
   * 
   * 

   * @param filter 
   * @returns Array of News model instances
   */
  @operation('get', '/news')
  async find(@param({name: 'filter', in: 'query'}) filter: {
  where?: {
  
};
  fields?: {
  relevantFrom?: boolean;
  relevantTo?: boolean;
  title?: boolean;
  id?: boolean;
  shortDescription?: boolean;
  description?: boolean;
  homePageDescription?: boolean;
  showOnHome?: boolean;
};
  offset?: number;
  limit?: number;
  skip?: number;
  order?: string[];
}): Promise<News[]> {
    throw new Error('Not implemented');
  }

}

