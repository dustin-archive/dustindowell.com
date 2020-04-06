
import Home from './views/home'
// import About from './views/about'
import Missing from './views/missing'

const pages = {
  '/': Home,
  // '/about': About,
  '/missing': Missing
}

const rewrites = [
  // { source: /\/gp\/[0-9a-f]{24}$/i, destination: '/general' },
  // { source: /\/dp\/[0-9a-f]{24}$/i, destination: '/detail' }
]

export { pages, rewrites }
