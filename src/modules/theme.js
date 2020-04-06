
const backward = state => {
  const theme = state.theme

  if (theme.index < 2) {
    theme.index = 4
  } else {
    theme.index--
  }

  return { theme }
}

const forward = state => {
  const theme = state.theme

  if (theme.index > 3) {
    theme.index = 1
  } else {
    theme.index++
  }

  return { theme }
}

export default {
  state: {
    index: 1
  },
  actions: {
    backward,
    forward
  }
}
