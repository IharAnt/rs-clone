import { ITableRatingTitle } from "../components/itemTableRating/types/types";
import ratIco from './../assets/img/ratIco.png';
import xpIco from './../assets/img/xpIco.png';
import levelIco from './../assets/img/levelIco.png';
import taskIco from './../assets/img/taskIco.png';
import achiIco from './../assets/img/achiIco.png';
import nameIco from './../assets/img/nameIco.png';

const dataTableRatingTitle: ITableRatingTitle[] = [
    {
        name: 'place',
        text: 'Место игрока',
        img: ratIco,
    },
    {
        name: 'name',
        text: 'Имя игрока',
        img: nameIco,
    },
    {
        name: 'totalLevel',
        text: 'Уровень игрока',
        img: levelIco,
    },
    {
        name: 'totalExperience',
        text: 'Суммарное количество опыта',
        img: xpIco,
    },
    {
        name: 'approvedTasks',
        text: 'Количество выполненных квестов',
        img: taskIco,
    },
    {
        name: 'achievements',
        text: 'Количество полученных достижений',
        img: achiIco,
    }
]

export default dataTableRatingTitle;
