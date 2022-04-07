async function signupHandymanFormHandler(event) {
    event.preventDefault();

    const firstName = document.querySelector('#handy-first').value.trim();
    const lastName = document.querySelector('#handy-last').value.trim();
    const businessName = document.querySelector('#handy-business').value.trim();
    const email = document.querySelector('#handy-email').value.trim();
    const password = document.querySelector('#handy-password').value.trim();

    if (firstName && lastName && businessName && email && password) {
        const response = await fetch('/api/users/handyman/signup', {
            method: 'post',
            body: JSON.stringify({
                firstName,
                lastName,
                businessName,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#handyman-signup').addEventListener('submit', signupHandymanFormHandler);

async function signupCustomerFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#cust-username').value.trim();
    const email = document.querySelector('#cust-email').value.trim();
    const password = document.querySelector('#cust-password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/customer/signup', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#customer-signup').addEventListener('submit', signupCustomerFormHandler);