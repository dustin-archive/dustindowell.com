
import { patch } from 'superfine'
import isFunction from 'lodash-es/isFunction'
import isPlainObject from 'lodash-es/isPlainObject'

import { pages } from './routes'
import router from './modules/router'
import theme from './modules/theme'

const node = document.getElementById('app')

const state = {
  router: router.state,
  theme: theme.state
}

let lock = false

const dispatch = (action, data) => {
  let result = action(state, dispatch)

  if (isFunction(result)) {
    result = result(data)
  }

  if (isPlainObject(result)) {
    Object.assign(state, result)

    if (!lock) {
      lock = true

      window.requestAnimationFrame(() => {
        const route = pages[state.router.to]
        const routeObject = route && route.view ? route : pages['/missing']

        lock = false

        patch(node, routeObject.view(state, dispatch))
      })
    }
  }
}

const getState = action => action(state)

export { dispatch, getState }
