import * as Screens from './Screens';
import { capitalize } from 'lodash';

export default function Content(state){
    return `
    <div id="content">
    <div class="container">
        ${Screens[capitalize(state.active)](state)}
    </div>
    </div>
`;
}
