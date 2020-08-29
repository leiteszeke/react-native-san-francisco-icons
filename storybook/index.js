import { getStorybookUI, configure } from '@storybook/react-native';
import './rn-addons';

configure(() => {
  require('./stories');
}, module);

// const StorybookUIRoot = getStorybookUI({ theme: darkTheme });

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
