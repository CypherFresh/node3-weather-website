

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
 
  const location = search.value
  const find = 'http://localhost:3000/weather?address='+encodeURIComponent(location)+''
  
  messageOne.textContent = 'Loading...'

  fetch('/weather?address=').then((response) => {
 response.json().then((data) => {
  if (data.error) {
    messageOne.textContent = 'Error'
    messageTwo.textContent = (data.error)
  } else {
    messageOne.textContent = (data.location)
    messageTwo.textContent = (data.forecast)
  }
 })
})
})