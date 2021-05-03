document.getElementById('background').addEventListener('click', background)
document.getElementById('text').addEventListener('click', text)
document.getElementById('image').addEventListener('click', image)
document.getElementById('show').addEventListener('click', show)
document.getElementById('hide').addEventListener('click', hide)

function background () {
  document.body.style.backgroundColor = 'black'
}

function text () {
  document.getElementById('paragraph').innerHTML = 'This is some new text'
}

function image () {
  document.getElementById('picture').src = '/images/hedgehog.jpg'
}

function hide () {
  document.getElementById('paragraph').style.display = "none"
}

function show () {
  document.getElementById('paragraph').style.display = "block"
}
