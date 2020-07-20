function opening() {
  const opBg = document.getElementsByClassName('opBg')
  for (let i = 0; i < opBg.length; i++) {
    opBg[i].classList.add('out')
  }

  const op = document.getElementById('op')
  setTimeout(() => {
    op.classList.add('fadeout')
    setTimeout(() => {
      op.style.display = 'none'
    }, 500)
  }, 3000)
}
