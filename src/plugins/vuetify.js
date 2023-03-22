/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    },
    VBtn: {
      variant: 'tonal',
      color: 'tiago'
    },
    VTextField: {
      variant: 'outlined'
    },
    VSelect: {
      variant: 'outlined'
    },
  },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#61850d',
          secondary: '#850d0d',
          tiago: '#0e325c'
        },
      },
      test: {
        dark: true,
        colors: {
          primary: '#b4edb5',
          secondary: '#edb4b4',
          tiago: '#85b5ed'
        },
      },
    },
  },
})
