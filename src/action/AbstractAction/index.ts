import AbstractRenderer from '../../rendering/core/renderer/AbstractRenderer';

abstract class AbstractAction {
  protected element: HTMLElement;
  protected canvas: HTMLCanvasElement;
  protected renderer: AbstractRenderer;

  // for interaction
  protected mousePressed: boolean;
  protected touchPressed: boolean;

  constructor(
    element: HTMLElement,
    canvas: HTMLCanvasElement,
    renderer: AbstractRenderer
  ) {
    this.element = element;
    this.canvas = canvas;
    this.renderer = renderer;

    this.bindFunction();

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.element.addEventListener('mouseenter', this.mouseEnterEvent, false);
    this.element.addEventListener('mouseleave', this.mouseLeaveEvent, false);
    this.element.addEventListener('mousedown', this.mouseDownEvent, false);
    this.element.addEventListener('mousemove', this.mouseMoveEvent, false);
    this.element.addEventListener('mouseup', this.mouseUpEvent, false);

    this.element.addEventListener('touchstart', this.touchStartEvent, false);
    this.element.addEventListener('touchmove', this.touchMoveEvent, false);
    this.element.addEventListener('touchend', this.touchEndEvent, false);
    this.element.addEventListener('touchcancel', this.touchCancelEvent, false);
  }

  protected bindFunction(): void {
    this.mouseEnterEvent = this.mouseEnterEvent.bind(this);
    this.mouseLeaveEvent = this.mouseLeaveEvent.bind(this);
    this.mouseDownEvent = this.mouseDownEvent.bind(this);
    this.mouseMoveEvent = this.mouseMoveEvent.bind(this);
    this.mouseUpEvent = this.mouseUpEvent.bind(this);

    this.touchStartEvent = this.touchStartEvent.bind(this);
    this.touchMoveEvent = this.touchMoveEvent.bind(this);
    this.touchEndEvent = this.touchEndEvent.bind(this);
    this.touchCancelEvent = this.touchCancelEvent.bind(this);
  }

  protected mouseEnterEvent(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  protected mouseLeaveEvent(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  protected mouseDownEvent(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.mousePressed = true;
  }

  protected mouseMoveEvent(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  protected mouseUpEvent(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.mousePressed = false;
  }

  protected touchStartEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.touchPressed = true;
  }

  protected touchMoveEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }

  protected touchEndEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.touchPressed = false;
  }

  protected touchCancelEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();

    this.touchPressed = false;
  }

  protected getViewPosition(clientX: number, clientY: number): any {
    const bounds = this.element.getBoundingClientRect();
    const scaleX = this.canvas.width / bounds.width;
    const scaleY = this.canvas.height / bounds.height;
    const position = {
      x: scaleX * (clientX - bounds.left),
      y: scaleY * (bounds.height - clientY + bounds.top),
    };

    return position;
  }
}

export default AbstractAction;
