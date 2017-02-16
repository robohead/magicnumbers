function getRandomNumber () {
  let result = ''
  const string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 10; i > 0; --i) result += string[Math.floor(Math.random() * string.length)]
  return result
}

exports['default'] = getRandomNumber
module.exports = exports['default']
