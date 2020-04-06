
import fs from 'fs'
import { renderToString } from 'hyperapp-render/browser'
import { body, html, link, meta, script, style, title, div } from './html'

const readFile = file => fs.readFileSync(file, 'utf-8')

const Inline = data => {
  return [
    style({ innerHTML: readFile('./public/app.min.css') }),
    script({ innerHTML: readFile('./public/app.min.js') })
  ]
}

const Reference = data => {
  return [
    link({ rel: 'stylesheet', href: '/app.css' }),
    script({ defer: true, src: '/app.js' })
  ]
}

const Sources = PRODUCTION ? Inline : Reference

const render = data => {
  return '<!DOCTYPE html>' + renderToString([
    html({ lang: 'en' }, [
      meta({ charset: 'utf-8' }),
      title(data.title),
      meta({ name: 'author', content: data.author }),
      meta({ name: 'description', content: data.description }),
      meta({ id: 'viewport', name: 'viewport', content: 'width=device-width, maximum-scale=1, user-scalable=0' }),
      link({ rel: 'icon', type: 'image/png', href: '/favicon.png' }),
      // script({ async: true, src: 'https://www.googletagmanager.com/gtag/js' }),
      script({ innerHTML: data.structured, type: 'application/ld+json' }),
      body([
        div({ id: 'app' })
      ]),
      Sources(data)
    ])
  ])
}

const output = render({
  title: 'Dustin Dowell',
  description: '',
  structured: JSON.stringify({
    foo: 'bar',
    baz: 'qux'
  })
})

process.stdout.write(output)
