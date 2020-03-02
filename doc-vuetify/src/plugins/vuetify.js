import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import pt from 'vuetify/es5/locale/pt';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.blue.lighten4,
        accent: colors.blue.base
      }
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
