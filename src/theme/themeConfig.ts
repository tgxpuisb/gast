import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: '#FFFFFF',
  },
  components: {
    Menu: {
      itemBg: 'transparent',
      itemColor: '#FFFFFF',
      itemHoverColor: '#FFFFFF'
    }
  }
};

export default theme;