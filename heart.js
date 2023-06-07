const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the values from the form
    const drivesMyLife = document.getElementById('drives-my-life').value;
    const peopleToHelp = document.getElementById('people-to-help').value;
    const needsToMeet = document.getElementById('needs-to-meet').value;
    const causeToBeInvolved = document.getElementById('cause-to-be-involved').value;
    const summaryPassion = document.getElementById('summary-passion').value;

    // Display the results
    const results = document.createElement('div');
    results.innerHTML = `
    <h3>Results:</h3>
    <p>1. What drives my life? ${drivesMyLife}</p>
    <p>2. What are the people you most want to help? ${peopleToHelp}</p>
    <p>3. The needs I love most to meet (in another person’s life)? ${needsToMeet}</p>
    <p>4. The cause I feel God wants me to be involved in for His glory? ${causeToBeInvolved}</p>
    <p>5. In Summary: I have a passion for ${summaryPassion}</p  `;
    form.appendChild(results);
});
