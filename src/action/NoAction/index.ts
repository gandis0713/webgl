import AbstractRenderer from '../../rendering/renderer/AbstractRenderer';
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
