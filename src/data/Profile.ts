import TaskTypeEnum from '../types/enums/TaskTypeEnum';
import { IProfile } from '../types/interfaces/IUser';

const profile: IProfile = {
  id: 'sdf5sd4af6sd54f',
  email: 'test@example.com',
  name: 'Vasya',
  birthday: '25-10-2000',
  phone: '+1525646584654',
  photo: '',
  moticoins: 500,
  totalExperience: 500,
  nextLevelExperience: 1000,
  experiences: [
    {
      type: TaskTypeEnum.Power,
      value: 200,
    },
    {
      type: TaskTypeEnum.Intelligence,
      value: 300,
    },
  ],
  achievements: [
    {
      type: TaskTypeEnum.Power,
      id: 'sdf5sd4af6sd54f',
      name: 'Силач',
      img: 'asdfasdf',
      description: 'asdfas dfa dfa sdf asdfasdf asdf ',
      maxPoints: 200,
    },
  ],
  level: 1,
  tasksStats: {
    approved: 2,
    inprogress: 2,
    open: 1,
    resolved: 3,
  },
};

export default profile;
