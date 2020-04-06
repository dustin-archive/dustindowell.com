
import './automaticReload'

// import { gtagConfig } from './gtag'
import { dispatch, getState } from './pocket'
import { pages } from './routes'

import router from './modules/router'

const listen = window.addEventListener

const routeHandler = () => {
  dispatch(router.actions.routerInit)

  getState(state => {
    const route = pages[state.router.to]
    const routeObject = route && route.init ? route : pages['/missing']
    routeObject.init()
  })

  // gtagConfig()
}

listen('DOMContentLoaded', () => {
  routeHandler()

  listen('popstate', routeHandler)
  listen('pushstate', routeHandler)
})
