
if (PRODUCTION === false) {
  const source = new EventSource('/reload')

  source.onmessage = body => {
    if (body.data === 'connect') {
      console.log('Connected to automatic reload')
      return // stop execution
    }

    if (body.data === 'reload') {
      window.location.reload()
      return // stop execution
    }

    if (body.data === undefined) {
      console.log('Heartbeat from automatic reload')
    }
  }
}
