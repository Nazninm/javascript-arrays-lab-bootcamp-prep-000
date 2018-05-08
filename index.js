const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(element)
{
  kittens.push(element)
  return kittens
}

function destructivelyPrependKitten(element)
{
  kittens.unshift()
  return kittens
}

function destructivelyRemoveLastKitten()
{
  kittens.pop()
  return kittens
}

function
