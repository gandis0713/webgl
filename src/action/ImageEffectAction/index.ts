import AbstractImageRenderer from '../../renderer/AbstractImageRenderer';
import AbstractRenderer from '../../renderer/AbstractRenderer';
import AbstractAnimationAction from '../AbstractAnimationAction';

class ImageEffectAction extends AbstractAnimationAction {
  protected viewPosition: number[] = [
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
  ];

  constructor(
    element: HTMLElement,
    canvas: HTMLCanvasElement,
    renderer: AbstractRenderer
  ) {
    super(element, canvas, renderer);
  }

  protected mouseEnterEvent(event: MouseEvent): void {
    super.mouseEnterEvent(event);
  }

  protected mouseLeaveEvent(event: MouseEvent): void {
    super.mouseLeaveEvent(event);
  }

  protected mouseDownEvent(event: MouseEvent): void {
    super.mouseDownEvent(event);

    this.setViewPosition(event);
    this.requestAnimation();
  }

  protected mouseMoveEvent(event: MouseEvent): void {
    super.mouseMoveEvent(event);

    if (this.mousePressed === true) {
      this.setViewPosition(event);
    }
  }

  protected mouseUpEvent(event: MouseEvent): void {
    super.mouseUpEvent(event);

    this.resetViewPosition();
    this.cancelAnimation();
  }

  protected touchStartEvent(event: TouchEvent): void {
    super.touchStartEvent(event);

    if (event.touches.length === 1) {
      this.setViewPosition(event.touches[0]);
    }
  }

  protected touchMoveEvent(event: TouchEvent): void {
    super.touchMoveEvent(event);

    if (this.touchPressed === true && event.touches.length === 1) {
      this.setViewPosition(event.touches[0]);
    }
  }

  protected touchEndEvent(event: TouchEvent): void {
    super.touchEndEvent(event);

    this.resetViewPosition();
    this.cancelAnimation();
  }

  protected touchCancelEvent(event: TouchEvent): void {
    super.touchCancelEvent(event);

    this.resetViewPosition();
    this.cancelAnimation();
  }

  protected setViewPosition(event: Touch | MouseEvent): void {
    const position = this.getViewPosition(event.clientX, event.clientY);
    this.viewPosition[0] = position.x;
    this.viewPosition[1] = position.y;

    const imageRenderer = this.renderer as AbstractImageRenderer;
    if (imageRenderer) imageRenderer.setViewPosition(this.viewPosition);
  }

  private resetViewPosition(): void {
    this.viewPosition[0] = Number.MIN_SAFE_INTEGER;
    this.viewPosition[1] = Number.MIN_SAFE_INTEGER;
  }
}

export default ImageEffectAction;
