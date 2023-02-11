import WebRequest from '../helpers/WebRequest';
import appConfig from '../configs/AppConfig';
import RatingSortType from '../types/enums/RatingSortEnum';
import OrderType from '../types/enums/OrderEnum';
import { IPaginationResponse } from '../types/interfaces/IPagination';
import { IRating } from '../types/interfaces/IRating';
import ratings from '../data/Ratings';

export default class RatingService {
  private webRequest: WebRequest;

  private ratingPath = `${appConfig.apiUrl}/rating`;

  constructor(webRequest: WebRequest = new WebRequest()) {
    this.webRequest = webRequest;
  }

  async getRating(
    page: number,
    limit = 10,
    sort?: RatingSortType,
    order?: OrderType
  ): Promise<IPaginationResponse<IRating>> {
    // let query = this.webRequest.generateQuery({
    //   _page: page,
    //   _limit: limit,
    // });
    // if (sort && order && sort !== RatingSortType.empty && order !== OrderType.empty) {
    //   query = this.webRequest.generateQuery({
    //     _page: page,
    //     _limit: limit,
    //     _sort: sort,
    //     _order: order,
    //   });
    // }
    // const result = await this.webRequest.get<IPaginationResponse<IRating>>(`${this.ratingPath}${query}`);
    
    // return result;
console.log(limit)
    ratings.count = 10;
    ratings.limit = limit;
    ratings.page = page;

    return Promise.resolve(ratings);
  }
}
