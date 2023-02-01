import './index.scss';
import { IRouter } from './types/router/IRouter';
import router from './scripts/router/Router';
import { Footer } from './scripts/components/footer/Footer';

class Application {
  private router: IRouter;

  constructor() {
    this.router = router;
  }

  async run(): Promise<void> {
    router.listen();
    router.navigate();
  }

  render() {
    const footer = new Footer();
    document.body.insertAdjacentElement('beforeend', footer.render());
  }
}

const app = new Application();
app.render();
app.run();
