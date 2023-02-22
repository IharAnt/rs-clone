import './style.css';
import { props } from './types';

export default function CreateTaskHepler({ message, helper, setHelper }: props) {
  const classes = helper
    ? 'taskCreateHelper__popup taskCreateHelper__popup-open'
    : 'taskCreateHelper__popup taskCreateHelper__popup-closed';

  return (
    <div className="taskCreateHelper">
      <div className="taskCreateHelper__mark" onClick={() => setHelper(!helper)}>
        ?
      </div>
      <div className={classes}>{message}</div>
    </div>
  );
}
