import { Page } from '../../../types/templates/Page';
import './main.scss';

export class Main extends Page {
  constructor(path?: string) {
    super(path);
  }

  render(): HTMLElement {
    this.container.classList.add('main');
    return this.container;
  }

  destroy(): void {
    // this.filterSidebar.destroy();
    // this.contentContainer.destroy();
    super.destroy();
  }
}
