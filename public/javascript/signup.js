async function signupFormHandler(event) {
    event.preventDefault()

    const username = document.querySelector('#username-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()

    if (username && password) {
        const response = await fetch('/api/user', {
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
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);