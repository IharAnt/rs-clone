import RatingSortType from '../types/enums/RatingSortEnum';
import OrderType from '../types/enums/OrderEnum';
import { IPaginationResponse } from '../types/interfaces/IPagination';
import { IRating } from '../types/interfaces/IRating';
import { IAchievement } from '../types/interfaces/IAchievement';
import apiClient from '../api/ApiClient';
import Webrequest from '../helpers/WebRequest';

export default class RatingService {
  static ratingPath = `/rating`;

  static async getRating(
    page: number,
    limit = 10,
    sort?: RatingSortType,
    order?: OrderType,
    search = ''
  ): Promise<IPaginationResponse<IRating>> {
    let query = Webrequest.generateQuery({
      _page: page,
      _limit: limit,
      _search: search,
    });
    if (sort && order && sort !== RatingSortType.empty && order !== OrderType.empty) {
      query = Webrequest.generateQuery({
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: order,
        _search: search,
      });
    }
    const response = await apiClient.get<IPaginationResponse<IRating>>(`${RatingService.ratingPath}${query}`);
    return response.data;
    
    // return result;
    // ratings.count = 20;
    // ratings.limit = limit;
    // ratings.page = page;

    // return Promise.resolve(ratings);
  }

  static async getAchivements(): Promise<IAchievement[]> {
    const response = await apiClient.get<IAchievement[]>(`${RatingService.ratingPath}/getAchivements`);
    return response.data;
  }
}
