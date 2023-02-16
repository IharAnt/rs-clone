import RatingSortType from '../types/enums/RatingSortEnum';
import OrderType from '../types/enums/OrderEnum';
import { IPaginationResponse } from '../types/interfaces/IPagination';
import { IRating } from '../types/interfaces/IRating';
import ratings from '../data/Ratings';
import { IAchievement } from '../types/interfaces/IAchievement';
import apiClient from '../api/ApiClient';

export default class RatingService {
  static ratingPath = `/rating`;

  static async getRating(
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
    ratings.count = 20;
    ratings.limit = limit;
    ratings.page = page;

    return Promise.resolve(ratings);
  }

  static async getAchivements(): Promise<IAchievement[]> {
    const response = await apiClient.get<IAchievement[]>(`${RatingService.ratingPath}/getAchivements`);
    return response.data;
  }
}
