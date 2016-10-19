const backgroundColor = '#2b303b'
const borderColor = '#2b303b'
const foregroundColor = '#c0c5ce'
const cursorColor = '#c0c5ce'

const colors = {
  black: backgroundColor,
  red: '#bf616a',
  green: '#a3be8c',
  yellow: '#ebcb8b',
  blue: '#8fa1b3',
  magenta: '#b48ead',
  cyan: '#96b5b4',
  white: foregroundColor,
  lightblack: backgroundColor,
  lightRed: '#bf616a',
  lightGreen: '#a3be8c',
  lightYellow: '#ebcb8b',
  lightBlue: '#8fa1b3',
  lightMagenta: '#b48ead',
  lightCyan: '#96b5b4',
  lightWhite: foregroundColor
}

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    colors,
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    css: `
      ${config.css || ''}
      /* Main background color */
      .hyperterm_main {
        background-color: ${backgroundColor} !important;
      }

      /* Tab colors */
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
        border: none !important;
        border-right: 1px solid transparent !important;
        border-left: 1px solid transparent !important;
        border-bottom: 1px solid transparent !important;
        transition: border-color .4s ease !important;
      }

      /* Tab emphasized when active */
      .tab_active {
        border-bottom: 1px solid ${colors.blue} !important;
      }
    `
  })
)
