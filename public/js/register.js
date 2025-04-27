localforage.setDriver(localforage.LOCALSTORAGE)
let formFail = document.getElementById('formFail')
formFail.style.display = "none"

let formSuccess = document.getElementById('formSuccess')
formSuccess.style.display = "none"
let registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', (el) => {
  let studentCode = el.target[0].value
  let studentName = el.target[1].value
  if(studentCode == '' && studentName == '') {
    formFail.style.display = ""
    return false
  }

  formSuccess.style.display = ""
  save_item(studentCode, studentName)
  window.location.pathname = '/index.html'
  el.preventDefault()
})

function save_item(key, value){
  localforage.setItem(key, value).then(function (value) {
    // Do other things once the value has been saved.
    console.log(value);
  }).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
  });
}
