import AbstractImageRenderer from '../../renderer/AbstractImageRenderer';
import AbstractWindow from '../AbstractWindow';

abstract class AbstractImageWindow extends AbstractWindow {
  constructor(container: HTMLElement) {
    super(container);
  }

  public setImage(image: HTMLImageElement): void {
    const renderer = this.renderer as AbstractImageRenderer;
    renderer.setImage(image);
  }
}

export default AbstractImageWindow;
