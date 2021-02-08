import AbstractRenderer from '../../renderer/AbstractRenderer';
import AbstractAction from '../AbstractAction';

abstract class AbstractAnimationAction extends AbstractAction {
  protected animationRequestID;

  constructor(
    element: HTMLElement,
    canvas: HTMLCanvasElement,
    renderer: AbstractRenderer
  ) {
    super(element, canvas, renderer);
  }

  protected bindFunction(): void {
    super.bindFunction();

    this.requestAnimation = this.requestAnimation.bind(this);
    this.cancelAnimation = this.cancelAnimation.bind(this);
  }

  protected requestAnimation(): void {
    this.renderer.draw();
    this.animationRequestID = requestAnimationFrame(this.requestAnimation);
  }

  protected cancelAnimation(): void {
    this.renderer.draw();
    cancelAnimationFrame(this.animationRequestID);
  }
}

export default AbstractAnimationAction;
