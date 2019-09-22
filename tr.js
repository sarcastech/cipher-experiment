const _alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let findIndexes = function (str) {
  let _chars = str.replace(' ', '').toLowerCase().split('')
  return _chars.map(_char => {
    return _alphabet.indexOf(_char)
  })
}

module.exports = {
  encode: function (str, key) {
    let _saltIndexes = findIndexes(key)
    let _charIndexes = findIndexes(str)

    return _charIndexes.map((val, index) => {
      let _num = val + _saltIndexes[index]
      if (_num >= _alphabet.length) {
        _num = _num % _alphabet.length
      }
      return _alphabet[_num]
    }).join('')
  },
  decode: function (val, key) {
    let _saltIndexes = findIndexes(key)
    let _charIndexes = findIndexes(val)

    return _charIndexes.map((val, index) => {
      let _num = val - _saltIndexes[index]
      if (_num < 0) {
        _num = _alphabet.length - Math.abs(_num)
      }
      return _alphabet[_num]
    }).join('')
  }
}
