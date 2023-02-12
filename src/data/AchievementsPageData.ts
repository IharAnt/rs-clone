import powerIco from './../assets/img/powerIco.png';
import intelligenceIco from './../assets/img/intelligenceIco.png';
import sleepIco from './../assets/img/sleepIco.png';
import teacherIco from './../assets/img/teacherIco.png';
import learnerIco from './../assets/img/learnerIco.png';
import IdlerIco from './../assets/img/IdlerIco.png';
import TaskTypeEnum from "../types/enums/TaskTypeEnum";
import { IAchievement } from "../types/interfaces/IAchievement";

const AchievementsPageData: IAchievement[] = [
    {
        id: 'dsfsdf',
        name: 'Силач',
        description: 'Ты можешь пробежать 10 километров или подтянуться 20 раз? Значит этот тип достижений для тебя, выполняй различные физические или силовые упражнения и получай необходимые баллы.Докажи всем, что именно ты достоин этого значка в своем профиле.',
        img: powerIco,
        maxPoints: 1500,
        type: TaskTypeEnum.Power,
    },
    {
        id: 'dsfsdf',
        name: 'Интеллектуал',
        description: 'Выучить новый язык, как выпить кофе? Значит это достижение именно для тебя. Учи новые языки, технологии, развивай навыки и получай опыт. Заработай данный значок в свой профиль, пусть все знают кто здесь самый образованный.',
        img: intelligenceIco,
        maxPoints: 1000,
        type: TaskTypeEnum.Intelligence,
    },
    {
        id: 'dsfsdf',
        name: 'Соня',
        description: 'Выучить новый язык, как выпить кофе? Значит это достижение именно для тебя. Учи новые языки, технологии, развивай навыки и получай опыт. Заработай данный значок в свой профиль, пусть все знают кто здесь самый образованный.',
        img: sleepIco,
        maxPoints: 2000,
        type: TaskTypeEnum.Sleep,
    },
    {
        id: 'dsfsdf',
        name: 'Учитель',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: teacherIco,
        maxPoints: 1000,
        type: TaskTypeEnum.Teacher,
    },
    {
        id: 'dsfsdf',
        name: 'Ученик',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: learnerIco,
        maxPoints: 1000,
        type: TaskTypeEnum.Learner,
    },
    {
        id: 'dsfsdf',
        name: 'Бездельник',
        description: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание',
        img: IdlerIco,
        maxPoints: 5000,
        type: TaskTypeEnum.Idler,
    }
]

export default AchievementsPageData;
