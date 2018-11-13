import {MDCRipple} from '@material/ripple';
import './index.scss';

const buttons = document.querySelectorAll('.mdc-button');

for (const button of buttons) {
  new MDCRipple(button);
}