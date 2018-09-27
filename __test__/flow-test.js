// @flow

type TestObj = {
  a?: number,
  b: string,
  a: number
}

function add(x: TestObj, y: number) {
  return x + y
}

export default add