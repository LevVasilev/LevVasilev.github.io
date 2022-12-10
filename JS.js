
function toggleLoader() {
  const loader = document.getElementById('loader')
  loader.classList.toggle('hidden')
}

function onSuccess(formNode) {
  alert('Ваша заявка успешно отправлена!')
  formNode.classList.toggle('hidden')
}

function onError(error) {
  alert(error.message)
}

function serializeForm(formNode) {
  const data = new FormData(formNode)
  return data
}

function checkValidity(event) {
  const formNode = event.target.form
  const isValid = formNode.checkValidity()
  formNode.querySelector('submit').disabled = !isValid
}

async function sendData(data) {
  return await fetch('/api/file:///C:/Me/Kursachpoweb/html.html', {
    method: 'POST',
    
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}
return new Promise(resolve => {
    setTimeout(() => {
    resolve({
    status: 400,
    error: {
     message: 'Что-то пошло не так!'
    }
    })
     })
     })

    


  


async function handleFormSubmit(event) {
  event.preventDefault()
  const data = serializeForm(event.target)

  toggleLoader()
  const { status, error } = await sendData(data)
  toggleLoader()

  if (status === 200) onSuccess(event.target)
  else onError(error)
}

const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
applicantForm.addEventListener('input', checkValidity)

applicantForm.querySelector('submit').disabled = true

async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
  
    toggleLoader()
    const { status } = await sendData(data)
    toggleLoader()
  
    if (status === 200) {
      onSuccess(event.target)
    }
    
  }
  
