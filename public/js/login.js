localforage.setDriver(localforage.LOCALSTORAGE)
let formFail = document.getElementById('formFail')
formFail.style.display = "none"

let formSuccess = document.getElementById('formSuccess')
formSuccess.style.display = "none"
let registerForm = document.getElementById('loginForm')

registerForm.addEventListener('submit', (el) => {
  formFail.style.display = "none"
  formSuccess.style.display = ""
  window.location.pathname = '/main.html'
  el.preventDefault()
})
