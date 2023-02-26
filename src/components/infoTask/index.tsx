import './style.css';
import { props } from './types';
import { options } from './options';
import InfoTaskItem from '../infoTaskItem';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import points from '../../assets/img/motekoinIco.png';

export default function InfoTask({ task }: props) {
  function getTaskStatus() {
    switch (task.status) {
      case TaskStatusEnum.Cancelled:
        return 'Отменена';
      case TaskStatusEnum.Rejected:
        return 'Отклонена';
      default:
        return 'Принята';
    }
  }

  const pointsNode = (
    <div className="flex justify-start gap-0.5">
      <div>{task.points}</div>
      <img className="w-4" src={points} alt="points" title="мотикойны" />
    </div>
  );

  return (
    <div className="infoTask">
      <h2 className="infoTask__title">Информация о мотиваторе:</h2>
      <InfoTaskItem title="Исполнитель:" valueNode={task.executor.name} />
      <InfoTaskItem title="Проверяющий:" valueNode={task.inspector.name} />
      <hr className="mt-2.5" />
      <InfoTaskItem title="Название:" valueNode={task.summary} />
      <InfoTaskItem title="Описание:" valueNode={task.description} />
      {task.dueDate && <InfoTaskItem title="Дедлайн:" valueNode={task.dueDate} />}
      <InfoTaskItem title="Тип:" valueNode={options.find((type) => type.value === task.type)?.label} />
      <InfoTaskItem title="Награда:" valueNode={pointsNode} />
      {task.taskReport && <InfoTaskItem title="Отчёт о работе:" valueNode={task.taskReport} />}
      {task.messages && task.messages[0] && (
        <>
          <hr className="mt-2.5" />
          <InfoTaskItem title="Отчёт о проверке:" valueNode={task.messages[0].message} />
        </>
      )}
      {(task.status === TaskStatusEnum.Approved ||
        task.status === TaskStatusEnum.Rejected ||
        task.status === TaskStatusEnum.Cancelled) && <InfoTaskItem title="Статус:" valueNode={getTaskStatus()} />}
    </div>
  );
}
