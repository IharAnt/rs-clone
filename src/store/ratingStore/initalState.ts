import OrderType from "../../types/enums/OrderEnum";
import RatingSortType from "../../types/enums/RatingSortEnum";
import { typeRatingPage } from "../types/types";

const initalState: typeRatingPage = {
    page: 1,
    limit: 10,
    search: '',
    sort: RatingSortType.empty,
    order: OrderType.empty,
}

export default initalState;
