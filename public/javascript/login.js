async function loginFormHandler(event) {
    event.preventDefault()

    const username = document.querySelector('#login-email').value.trim()
    const password = document.querySelector('#login-password').value.trim()

    if (username && password) {
        const response = await fetch('/api/users/login', {
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
            document.location.replace('/')
        } else {
            console.log('failed to log in')
        }
    }
}

document.querySelector('.formlogin').addEventListener('submit', loginFormHandler);