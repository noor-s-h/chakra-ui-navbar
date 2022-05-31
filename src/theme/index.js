import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { Button } from './button'
import { Link } from './link'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  config,
  colors: {
    white: "#fff",
    black: '#141414',
  },
  components: {
    Button,
    Link,
  },
  fonts,
  breakpoints,
})

export default theme
