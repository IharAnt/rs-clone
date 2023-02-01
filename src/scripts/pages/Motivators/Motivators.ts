import { Page } from '../../../types/templates/Page';
import './motivators.scss';

export class Motivators extends Page {
  constructor(path?: string) {
    super(path);
  }

  render(): HTMLElement {
    this.container.classList.add('motivators');
    return this.container;
  }

  destroy(): void {
    // this.filterSidebar.destroy();
    // this.contentContainer.destroy();
    super.destroy();
  }
}
