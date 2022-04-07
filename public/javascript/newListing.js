async function newListingFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#listingTitle').value.trim();
    const post_content = document.querySelector('#listingDesc').value.trim();
    const price = document.querySelector('#listingCost').value.trim();
    
    if (title && post_content && price) {
        const response = await fetch('/api/listings', {
            method: 'post',
            body: JSON.stringify({
                title,
                post_content,
                price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#newList-form').addEventListener('submit', newListingFormHandler);
