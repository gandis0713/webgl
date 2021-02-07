import AbstractCamera from '../../camera/AbstractCamera';
import OrthoGraphicCamera from '../../camera/OrthoGraphicCamera';
import Shader from '../../core/Shader';
import { vec2 } from 'gl-matrix';

abstract class AbstractRenderer {
  protected gl;
  protected camera: AbstractCamera;
  protected shader: Shader;

  protected width;
  protected height;

  constructor(gl) {
    this.gl = gl;
    this.bindFunction();

    this.camera = new OrthoGraphicCamera();
    this.createShader();
  }

  protected bindFunction(): void {}

  protected createShader(): void {
    this.shader = new Shader(this.gl);
  }

  public setSize(width: number, height: number): void {
    this.setViewport(0, 0, width, height);
    this.camera.setSize(-width / 2, width / 2, -height / 2, height / 2);
  }

  public setViewport(
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    this.width = width;
    this.height = height;
    this.gl.viewport(x, y, width, height);
  }

  public setShaderParameter(): void {}

  public createBuffer(): void {}

  public abstract draw(): void;

  public setCamera(camera: AbstractCamera) {
    this.camera = camera;
  }

  public getCamera(): AbstractCamera {
    return this.camera;
  }
}

export default AbstractRenderer;
