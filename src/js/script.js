window.addEventListener('scroll', function () {
  const header = document.querySelector('header')
  const select = document.querySelector('select')
  if (window.scrollY > 50) {
    header.classList.add('bg-white')
    header.classList.add('shadow-md')
    select.classList.add('border')
  } else if (window.scrollY < 50) {
    header.classList.remove('shadow-md')
    header.classList.remove('bg-white')
    select.classList.remove('border')
  }
})
