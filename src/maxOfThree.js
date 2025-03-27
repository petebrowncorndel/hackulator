function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x
  }
  else if (y > z && y > x) {
    return y
  }
  else if (z > x && z > y) {
    return z
  }
  else if (x == y && x > z) {
    return x
  }
  else if (x == z && x > y) {
    return x
  }
  else if (y == z && y > x) {
    return y
  }
  else if (y == z && y == x) {
    return y
  }
}

export default maxOfThree
