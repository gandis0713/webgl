import AbstractImageRenderer from '../../renderer/AbstractImageRenderer';
import AbstractWindow from '../AbstractWindow';
import ImageEffectAction from '../../../action/ImageEffectAction';

abstract class AbstractImageWindow extends AbstractWindow {
  constructor(element: HTMLElement) {
    super(element);
  }

  public setImage(image: HTMLImageElement): void {
    const renderer = this.renderer as AbstractImageRenderer;
    renderer.setImage(image);
  }

  protected createAction(): void {
    this.action = new ImageEffectAction(
      this.element,
      this.canvas,
      this.renderer
    );
  }
}

export default AbstractImageWindow;
