// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function saveWindowPosition(position) {
  return {
    type: 'WINDOW_POSITION',
    position
  }
}