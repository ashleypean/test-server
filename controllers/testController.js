const testController = {}

testController.loopThrough100 = (req, res, next) => {
  let arr = []

  for(let i = 0; i < 100; i++) {
    arr.push(i)
  }

  res.locals.loopThrough100 = arr
  // console.log('loopThrough100', arr)

  next()
}

testController.runThroughFizzBuzz = (req, res, next) => {
  let output = []
  for(let i = 0; i < 100; i++) {
    let num = i + 1
    let fizz = num % 3 === 0 ? 'Fizz' : ''
    let buzz = num % 5 === 0 ? 'Buzz' : ''
    output.push(fizz + buzz)
  }

  res.locals.fizzBuzz = output
  // console.log('runThroughFizzBuzz', output)

  next()
}


module.exports = testController