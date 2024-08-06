const countrySelect = document.getElementById('country');
const stateSelect = document.getElementById('state');

// Populate countries
// ... (Replace with your logic to fetch countries from the server)

countrySelect.addEventListener('change', () => {
  const country = countrySelect.value;
  if (country) {
    fetch('/getStates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country })
    })
    .then(response => response.json())
    .then(states => {
      stateSelect.innerHTML = '<option value="">Select State</option>';
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateSelect.appendChild(option);
      });
    });
  } else {
    stateSelect.innerHTML = '<option value="">Select State</option>';
  }
});
