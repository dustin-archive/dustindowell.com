
import { div } from '../html'

const About = (state, dispatch) => {
  return div({ class: 'about' }, 'About')
}

export default {
  view: About,
  init: () => {
    console.log('about')
  }
}
