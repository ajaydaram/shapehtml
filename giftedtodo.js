
const form = document.querySelector('form');

function handleSubmit(event) {
    event.preventDefault();

    // Get the values from the form
    const myGifts = document.getElementById('my-gifts').value;
    const primaryGifts = document.getElementById('primary-gifts').value;
    const secondaryGifts = document.getElementById('secondary-gifts').value;

    // Display the results
    const results = document.createElement('div');
    results.innerHTML = `
    <h3>Results:</h3>
    <p>Spiritual gifts I believe I have are: ${myGifts}</p>
    <p>Spiritual gifts from Spiritual Gifts Test (Primary Gifts): ${primaryGifts}</p>
    <p>Spiritual gifts from Spiritual Gifts Test (Secondary Gifts): ${secondaryGifts}</p>`;
    form.appendChild(results);
}

form.addEventListener('submit', handleSubmit);
