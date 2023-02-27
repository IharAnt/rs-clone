import './style.css';
import { props } from './types';
import { options } from './options';
import InfoTaskItem from '../infoTaskItem';
import TaskStatusEnum from '../../types/enums/TaskStatusEnum';
import points from '../../assets/img/motekoinIco.png';
import Linkify from 'react-linkify';
import { ReactNode, useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

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

  const linkify = (node: ReactNode) => (
    <Linkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a className="linkify" target="blank" href={decoratedHref} key={key}>
          {decoratedText}
        </a>
      )}
    >
      {node}
    </Linkify>
  );

  const pointsNode = (
    <div className="flex justify-start gap-0.5">
      <div>{task.points}</div>
      <img className="w-4" src={points} alt="points" title="мотикойны" />
    </div>
  );

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const images = task.imgFiles?.map((img) => img.data) as string[];

  const photoReportNode = (
    <div className="flex">
      {images.map((src, index) => (
        <img
          className="h-14"
          src={src}
          onClick={() => openImageViewer(index)}
          key={index}
          style={{ margin: '2px', height: '50px', cursor: 'pointer' }}
          alt="slider"
        />
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            zIndex: '20',
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );

  return (
    <div className="infoTask">
      <h2 className="infoTask__title">Информация о мотиваторе:</h2>
      <InfoTaskItem title="Исполнитель:" valueNode={task.executor.name} />
      <InfoTaskItem title="Проверяющий:" valueNode={task.inspector.name} />
      <hr className="mt-2.5" />
      <InfoTaskItem title="Название:" valueNode={task.summary} />
      <InfoTaskItem title="Описание:" valueNode={linkify(task.description)} />
      {task.dueDate && <InfoTaskItem title="Дедлайн:" valueNode={task.dueDate} />}
      <InfoTaskItem title="Тип:" valueNode={options.find((type) => type.value === task.type)?.label} />
      <InfoTaskItem title="Награда:" valueNode={pointsNode} />
      {task.taskReport && <InfoTaskItem title="Отчёт о работе:" valueNode={linkify(task.taskReport)} />}
      {task.imgFiles && task.imgFiles[0] && <InfoTaskItem title="Фотоотчёт:" valueNode={photoReportNode} />}
      {task.messages && task.messages[0] && (
        <>
          <hr className="mt-2.5" />
          <InfoTaskItem title="Отчёт о проверке:" valueNode={linkify(task.messages[0].message)} />
        </>
      )}

      {(task.status === TaskStatusEnum.Approved ||
        task.status === TaskStatusEnum.Rejected ||
        task.status === TaskStatusEnum.Cancelled) && <InfoTaskItem title="Статус:" valueNode={getTaskStatus()} />}
    </div>
  );
}
