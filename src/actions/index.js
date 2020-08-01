export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 書き方が2通りありますが、どちらでも問題ないです
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}
