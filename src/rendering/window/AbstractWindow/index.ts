import AbstractAction from '../../../action/AbstractAction';
import AbstractRenderer from '../../renderer/AbstractRenderer';
abstract class AbstractWindow {
  protected element: HTMLElement;
  protected canvas: HTMLCanvasElement;
  protected renderer: AbstractRenderer;
  protected action: AbstractAction;
  protected gl: WebGLRenderingContext | null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.canvas = document.createElement('canvas');
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.element.appendChild(this.canvas);
    this.gl = this.canvas.getContext('webgl');
  }

  public initialize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;

    this.createRenderer();
    this.initRenderer(width, height);

    this.createAction();
  }

  public initRenderer(width: number, height: number): void {
    this.renderer.setShaderParameter();
    this.renderer.createBuffer();
    this.renderer.setSize(width, height);
  }

  protected abstract createRenderer(): void;
  protected abstract createAction(): void;

  public setSize(width: number, height: number): void {
    this.canvas.width = width;
    this.canvas.height = height;
    this.renderer.setSize(width, height);
  }

  public render(): void {
    this.renderer.draw();
  }
}

export default AbstractWindow;
