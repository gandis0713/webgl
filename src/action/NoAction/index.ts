import AbstractRenderer from '../../rendering/core/renderer/AbstractRenderer';
import AbstractAction from '../AbstractAction';

class NoAction extends AbstractAction {
  constructor(
    element: HTMLElement,
    canvas: HTMLCanvasElement,
    renderer: AbstractRenderer
  ) {
    super(element, canvas, renderer);
  }
}

export default NoAction;
