/**
 * Uses Heron's formula to calculate the area of a triangle
 * with sides of length a, b, c
 * https://en.wikipedia.org/wiki/Heron%27s_formula
 */
function heron(a, b, c) {
  let x = 0.5*(a+b+c)
  return Math.sqrt(x*(x-a)*(x-b)*(x-c))
}

export default heron
