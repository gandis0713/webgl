import AbstractRenderer from '../../renderer/AbstractRenderer';
abstract class AbstractWindow {
  protected container: HTMLElement;
  protected canvas: HTMLCanvasElement;
  protected renderer: AbstractRenderer;
  protected gl: WebGLRenderingContext | null;

  constructor(container: HTMLElement) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.container.appendChild(this.canvas);
    this.gl = this.canvas.getContext('webgl');

    this.bind();

    this.container.addEventListener('mousedown', this.mouseDownEvent, false);
    this.container.addEventListener('mousemove', this.mouseMoveEvent, false);
    this.container.addEventListener('mouseup', this.mouseUpEvent, false);

    this.container.addEventListener('touchstart', this.touchStartEvent, false);
    this.container.addEventListener('touchmove', this.touchMoveEvent, false);
    this.container.addEventListener('touchend', this.touchEndEvent, false);
    this.container.addEventListener(
      'touchcancel',
      this.touchCancelEvent,
      false
    );
  }

  protected bind(): void {
    this.mouseDownEvent = this.mouseDownEvent.bind(this);
    this.mouseMoveEvent = this.mouseMoveEvent.bind(this);
    this.mouseUpEvent = this.mouseUpEvent.bind(this);

    this.touchStartEvent = this.touchStartEvent.bind(this);
    this.touchMoveEvent = this.touchMoveEvent.bind(this);
    this.touchEndEvent = this.touchEndEvent.bind(this);
    this.touchCancelEvent = this.touchCancelEvent.bind(this);
  }

  public initialize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;

    this.createRenderer();
    this.initRenderer(width, height);
  }

  public initRenderer(width: number, height: number): void {
    this.renderer.setShaderParameter();
    this.renderer.createBuffer();
    this.renderer.setSize(width, height);
  }

  protected abstract createRenderer(): void;

  protected mouseDownEvent(event: MouseEvent): void {
    this.renderer.mouseDownEvent(this.getViewPosition(event));
  }

  protected mouseMoveEvent(event: MouseEvent): void {
    this.renderer.mouseMoveEvent(this.getViewPosition(event));
  }

  protected mouseUpEvent(event: MouseEvent): void {
    this.renderer.mouseUpEvent(this.getViewPosition(event));
  }

  protected touchStartEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.renderer.mouseDownEvent(this.getViewPosition(event.touches[0]));
  }

  protected touchMoveEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.renderer.mouseMoveEvent(this.getViewPosition(event.touches[0]));
  }

  protected touchEndEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.renderer.mouseUpEvent(this.getViewPosition(event.changedTouches[0]));
  }

  protected touchCancelEvent(event: TouchEvent): void {
    event.stopPropagation();
    event.preventDefault();
    this.renderer.mouseUpEvent(this.getViewPosition(event.changedTouches[0]));
  }

  public setSize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.setSize(width, height);
  }

  public render(): void {
    this.renderer.draw();
  }

  public setRenderer(renderer: AbstractRenderer): void {
    this.renderer = renderer;
  }

  public getRenderer(): AbstractRenderer {
    return this.renderer;
  }

  private getViewPosition(event: any): any {
    const bounds = this.container.getBoundingClientRect();
    const scaleX = this.canvas.width / bounds.width;
    const scaleY = this.canvas.height / bounds.height;
    const position = {
      x: scaleX * (event.clientX - bounds.left),
      y: scaleY * (bounds.height - event.clientY + bounds.top),
    };

    return position;
  }
}

export default AbstractWindow;
