// JavaScript for validating student form
document.getElementById('studentForm').addEventListener('submit', function(event) {
    // Prevent form submission until validation passes
    event.preventDefault();

    // Grab values from form inputs
    const rollNo = document.getElementById('rollNo').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Define regex patterns for validation
    const rollNoPattern = /^\d{2}K-\d{4}$/;
    const emailPattern = /^k\d{6}@nu\.edu\.pk$/;
    const phonePattern = /^\d{11}$/;

    // Clear previous error messages
    clearErrors();

    // Validate Roll Number
    if (!rollNoPattern.test(rollNo)) {
        showError('rollNoError', 'Roll number must be in the format xxK-xxxx.');
        return;
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        showError('emailError', 'Email must be in the format kxxxxxx@nu.edu.pk.');
        return;
    }

    // Validate Phone Number
    if (!phonePattern.test(phone)) {
        showError('phoneError', 'Phone number must be exactly 11 digits.');
        return;
    }

    // If validation passes, you can submit the form data
    alert('Form submitted successfully!');
    // Uncomment below line to allow actual form submission
    // event.currentTarget.submit();
});

// Helper function to clear error messages
function clearErrors() {
    document.getElementById('rollNoError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
}

// Helper function to show error messages
function showError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}
