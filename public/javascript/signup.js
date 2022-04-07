async function signupFormHandler(event) {
    event.preventDefault()

    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if (email && password) {
        const response = await fetch('/api/customer', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/cust-dash')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);