
import { a, div, h1, h2, ul } from '../html'

import theme from '../modules/theme'

const Home = (state, dispatch) => {
  return div({ class: 'home -theme-' + state.theme.index }, [
    div({ class: 'card' }, [
      div({ class: 'art' }),
      div({ class: 'nav' }, [
        div({ onclick: () => dispatch(theme.actions.backward) }, 'Back'),
        div({ onclick: () => dispatch(theme.actions.forward) }, 'Next')
      ]),
      div({ class: 'info' }, [
        h1('Dustin Dowell'),
        h2('Developer + Designer + Artist'),
        ul([
          a({ href: 'https://github.com/whaaaley' }, 'Github'),
          a({ href: 'https://dribbble.com/dustindowell' }, 'Dribbble'),
          a({ href: 'https://instagram.com/whaaaley' }, 'Instagram')
        ])
      ])
    ])
  ])
}

export default {
  view: Home,
  init: () => {
    console.log('home')
  }
}
