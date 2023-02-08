import { IItemSlider } from "../components/slider/types/types";
import stepOne from './../assets/img/stepOne.png'
import stepTwo from './../assets/img/stepTwo.png';
import stepThree from './../assets/img/stepThree.png';
import stepFour from './../assets/img/stepFour.png';

const SLIDER_DATA: IItemSlider[] = [
    {
        text: 'Присоединяйся к сообществу активных людей и получи возможность принять участие в проекте "ToDoDone"',
        img: stepOne,
    },
    {
        text: 'Выполняй поставленные задачи в срок, и получай за это мотекойны.',
        img: stepTwo,
    },
    {
        text: 'Собирай полученные мотекойны на своем личном счету.',
        img: stepThree,
    },
    {
        text: 'Используй полученые мотекойны для покупки понравившихся товаров в магазине.',
        img: stepFour,
    },

]

export default SLIDER_DATA;
