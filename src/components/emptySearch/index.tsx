import notFound from '../../assets/img/notFound.png';
import './style.css';

export default function EmptyCart() {
  return (
    <div className="emptyCart">
      <div className="emptyCart__title">По данному запросу ничего не найдено</div>
      <img className="emptyCart__image" src={notFound} alt="not found" />
    </div>
  );
}
