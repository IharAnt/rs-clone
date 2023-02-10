import TaskTypeEnum from "../types/enums/TaskTypeEnum";
import { IPaginationResponse } from "../types/interfaces/IPagination";
import { IRating } from "../types/interfaces/IRating";

const ratings: IPaginationResponse<IRating> = {
  count: 5,
  limit: 10,
  page: 1,
  items: [{
    id: 'sdfsadfasdf',
    user: {
      id: 'sdf5sd4af6sd54f',
      email: 'test@example.com',
      name: 'Vasya',
    },
    place: 1,
    totalExperience: 500,
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
        img: '',
        maxPoints: 200,
      },
    ],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'dfsdfsdf',
    user: {
      id: 'g454654654',
      email: 'test1@example.com',
      name: 'Test1',
    },
    place: 2,
    totalExperience: 400,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 200,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 200,
      },
    ],
    achievements: [
      {
        type: TaskTypeEnum.Power,
        id: 'sdf5sd4af6sd54f',
        img: '',
        maxPoints: 200,
      },
    ],
    level: 1,
    approvedTasks: 3,
  },
  {
    id: 'ytyty',
    user: {
      id: '4564sdf',
      email: 'test2@example.com',
      name: 'Test2',
    },
    place: 3,
    totalExperience: 350,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 200,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 150,
      },
    ],
    achievements: [
      {
        type: TaskTypeEnum.Power,
        id: 'sdf5sd4af6sd54f',
        img: '',
        maxPoints: 200,
      },
    ],
    level: 1,
    approvedTasks: 4,
  },
  {
    id: 'xvcbcxcvb54654',
    user: {
      id: 'dfgd6545',
      email: 'test3@example.com',
      name: 'Test3',
    },
    place: 4,
    totalExperience: 200,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 100,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  }, {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  },
  {
    id: 'jkljkl',
    user: {
      id: 'hjkljkl',
      email: 'test4@example.com',
      name: 'Test4',
    },
    place: 5,
    totalExperience: 150,
    experiences: [
      {
        type: TaskTypeEnum.Power,
        value: 50,
      },
      {
        type: TaskTypeEnum.Intelligence,
        value: 100,
      },
    ],
    achievements: [],
    level: 1,
    approvedTasks: 2,
  }],

}

export default ratings;