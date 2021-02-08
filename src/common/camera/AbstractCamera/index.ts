import { vec3, mat4 } from 'gl-matrix';

export interface ILootAt {
  eye: vec3;
  up: vec3;
  target: vec3;
}

export interface IFrustum {
  left: number;
  right: number;
  top: number;
  bottom: number;
  near: number;
  far: number;
}

abstract class AbstractCamera {
  protected lookAt: ILootAt;
  protected frustum: IFrustum;

  protected wcvc: mat4;
  protected vcwc: mat4;
  protected vcpc: mat4;
  protected pcvc: mat4;
  protected wcpc: mat4;
  protected pcwc: mat4;

  constructor() {
    this.lookAt = {
      eye: vec3.create(),
      up: vec3.create(),
      target: vec3.create(),
    };
    this.lookAt.eye[0] = 0;
    this.lookAt.eye[1] = 0;
    this.lookAt.eye[2] = 1000;
    this.lookAt.up[0] = 0;
    this.lookAt.up[1] = 1;
    this.lookAt.up[2] = 0;

    this.frustum = {
      left: -250,
      right: 250,
      bottom: -250,
      top: 250,
      near: 1000,
      far: -1000,
    };

    this.wcvc = mat4.create();
    this.vcwc = mat4.create();
    this.vcpc = mat4.create();
    this.pcvc = mat4.create();
    this.wcpc = mat4.create();
    this.pcwc = mat4.create();

    this.initialize();
  }

  protected initialize(): void {
    mat4.lookAt(this.wcvc, this.lookAt.eye, this.lookAt.target, this.lookAt.up);
    mat4.invert(this.vcwc, this.wcvc);
  }

  protected abstract setProperty(): void;

  public setLootAt(lookAt: ILootAt): void {
    this.lookAt = lookAt;
  }

  public setSize(
    left: number,
    right: number,
    bottom: number,
    top: number
  ): void {
    this.frustum.left = left;
    this.frustum.right = right;
    this.frustum.bottom = bottom;
    this.frustum.top = top;
  }

  public setHorizontalSize(left: number, right: number): void {
    this.frustum.left = left;
    this.frustum.right = right;
  }

  public setVerticalSize(bottom: number, top: number): void {
    this.frustum.bottom = bottom;
    this.frustum.top = top;
  }

  public setFrustum(frustum: IFrustum): void {
    this.frustum = frustum;
  }

  public getWCPC(): mat4 {
    return this.wcpc;
  }

  public getVCPC(): mat4 {
    return this.vcpc;
  }
}

export default AbstractCamera;
