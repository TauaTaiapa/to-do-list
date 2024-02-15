const inputbox = document.getElementById('inputbox')
const listcontainer = document.getElementById('listcontainer')

function addTask() {
  if (inputbox.value === '') {
    alert('You must write something!')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputbox.value
    listcontainer.appendChild(li)
  }
}
