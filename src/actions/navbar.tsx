
enum Type {
  LOAD_NAVBAR = 'LOAD_NAVBAR',
}

export const navbarAction = {
  LOAD_NAVBAR: Type.LOAD_NAVBAR
}
export function loadNavBarAsync() {
  return dispatch => {
    return new Promise((resolve) => {
      //assume ajax call
      setTimeout(() => {
        let data = ["Home", "RPG", "Arcade","Brain Games"]
        resolve(data)
      }, 300)
    }).then(res => {
      dispatch({
        type: Type.LOAD_NAVBAR,
        payload: res
      })
    })
  }
}
