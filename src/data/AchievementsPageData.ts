import { IAchievementsPageData } from "../pages/achievements/types/types";
import powerIco from './../assets/img/powerIco.png';
import intelligenceIco from './../assets/img/intelligenceIco.png';
import sleepIco from './../assets/img/sleepIco.png';
import teacherIco from './../assets/img/teacherIco.png';
import learnerIco from './../assets/img/learnerIco.png';
import IdlerIco from './../assets/img/IdlerIco.png';
import TaskTypeEnum from "../types/enums/TaskTypeEnum";

const AchievementsPageData: IAchievementsPageData[] = [
    {
        name: 'Силач',
        description: 'Ты можешь пробежать 10 километров или подтянуться 20 раз? Значит этот тип достижений для тебя, выполняй различные физические или силовые упражнения и получай необходимые баллы.Докажи всем, что именно ты достоин этого значка в своем профиле.',
        img: powerIco,
        score: 1500,
        type: TaskTypeEnum.Power,
    },
    {
        name: 'Интеллектуал',
        description: 'Выучить новый язык, как выпить кофе? Значит это достижение именно для тебя. Учи новые языки, технологии, развивай навыки и получай опыт. Заработай данный значок в свой профиль, пусть все знают кто здесь самый образованный.',
        img: intelligenceIco,
        score: 1000,
        type: TaskTypeEnum.Intelligence,
    },
    {
        name: 'Соня',
        description: 'Выучить новый язык, как выпить кофе? Значит это достижение именно для тебя. Учи новые языки, технологии, развивай навыки и получай опыт. Заработай данный значок в свой профиль, пусть все знают кто здесь самый образованный.',
        img: sleepIco,
        score: 2000,
        type: TaskTypeEnum.Sleep,
    },
    {
        name: 'Учитель',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: teacherIco,
        score: 1000,
        type: TaskTypeEnum.Teacher,
    },
    {
        name: 'Ученик',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: learnerIco,
        score: 1000,
        type: TaskTypeEnum.Learner,
    },
    {
        name: 'Бездельник',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: IdlerIco,
        score: 5000,
        type: TaskTypeEnum.Idler,
    }
]

export default AchievementsPageData;
