
// function to edit profile bio by getting bio and submitting
async function editProfileHandler(event) {
    event.preventDefault();
  
    const bio = document.querySelector('input[name="bio"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            bio,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/profile/');
    }
    else {
        alert(response.statusText);
    }
}
  
document.querySelector('.edit-bio-form').addEventListener('submit', editProfileHandler);
  