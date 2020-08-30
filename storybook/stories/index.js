import * as React from 'react';
import {
  storiesOf,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import Arrows from './Arrows/index.stories';
import Commerce from './Commerce/index.stories';
import Editing from './Editing/index.stories';
import Others from './Others/index.stories';
import Keyboard from './Keyboard/index.stories';
import Math from './Math/index.stories';
import Objects from './Objects/index.stories';
import Time from './Time/index.stories';

addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    { name: 'dark', value: '#222222' },
    { name: 'white', value: '#ffffff', default: true },
  ],
});

storiesOf('Icons', module)
  .add('Arrows', () => <Arrows />)
  .add('Commerce', () => <Commerce />)
  .add('Editing', () => <Editing />)
  .add('Keyboard', () => <Keyboard />)
  .add('Math', () => <Math />)
  .add('Objects', () => <Objects />)
  .add('Others', () => <Others />)
  .add('Time', () => <Time />);
