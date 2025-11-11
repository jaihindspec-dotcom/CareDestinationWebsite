// Partner Form Validation and Submission

document.addEventListener('DOMContentLoaded', function() {
    const partnerForm = document.getElementById('partnerForm');
    const formMessage = document.getElementById('formMessage');

    if (partnerForm) {
        // Form submission handler
        partnerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (validateForm()) {
                submitForm();
            }
        });

        // Real-time validation for required fields
        const requiredFields = partnerForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });

            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        // Email validation
        const emailField = document.getElementById('email');
        if (emailField) {
            emailField.addEventListener('blur', function() {
                validateEmail(this);
            });
        }

        // Phone validation
        const phoneField = document.getElementById('phone');
        if (phoneField) {
            phoneField.addEventListener('blur', function() {
                validatePhone(this);
            });
        }
    }
});

// Validate entire form
function validateForm() {
    let isValid = true;
    const form = document.getElementById('partnerForm');
    
    // Clear previous messages
    hideMessage();

    // Check all required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    // Validate email
    const emailField = document.getElementById('email');
    if (emailField && !validateEmail(emailField)) {
        isValid = false;
    }

    // Validate phone
    const phoneField = document.getElementById('phone');
    if (phoneField && !validatePhone(phoneField)) {
        isValid = false;
    }

    // Check terms acceptance
    const termsCheckbox = document.getElementById('terms');
    if (termsCheckbox && !termsCheckbox.checked) {
        showMessage('Please accept the Terms & Conditions to proceed', 'error');
        isValid = false;
    }

    if (!isValid) {
        showMessage('Please fill in all required fields correctly', 'error');
    }

    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    
    if (field.required && value === '') {
        markFieldError(field, 'This field is required');
        return false;
    }

    clearFieldError(field);
    return true;
}

// Validate email
function validateEmail(field) {
    const value = field.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === '' && field.required) {
        markFieldError(field, 'Email is required');
        return false;
    }

    if (value !== '' && !emailRegex.test(value)) {
        markFieldError(field, 'Please enter a valid email address');
        return false;
    }

    clearFieldError(field);
    return true;
}

// Validate phone
function validatePhone(field) {
    const value = field.value.trim();
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    if (value === '' && field.required) {
        markFieldError(field, 'Phone number is required');
        return false;
    }

    if (value !== '' && !phoneRegex.test(value)) {
        markFieldError(field, 'Please enter a valid phone number');
        return false;
    }

    if (value !== '' && value.length < 10) {
        markFieldError(field, 'Phone number is too short');
        return false;
    }

    clearFieldError(field);
    return true;
}

// Mark field as error
function markFieldError(field, message) {
    field.classList.add('error');
    field.style.borderColor = '#e53e3e';
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#e53e3e';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    field.parentElement.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';
    
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Submit form
function submitForm() {
    const form = document.getElementById('partnerForm');
    const formData = new FormData(form);
    
    // Convert form data to object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Show loading state
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success simulation
        console.log('Form data:', data);
        
        showMessage(
            'Thank you for your partnership request! Our team will review your application and contact you within 24-48 hours.',
            'success'
        );

        // Reset form
        form.reset();
        
        // Restore button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // TODO: Replace with actual form submission
        /*
        fetch('/api/partner-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            showMessage(
                'Thank you for your partnership request! Our team will review your application and contact you within 24-48 hours.',
                'success'
            );
            form.reset();
        })
        .catch(error => {
            showMessage(
                'There was an error submitting your request. Please try again or contact us directly.',
                'error'
            );
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
        */
    }, 1500);
}

// Show message
function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// Hide message
function hideMessage() {
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'none';
}

// Auto-hide success message after 10 seconds
function autoHideMessage() {
    const formMessage = document.getElementById('formMessage');
    if (formMessage && formMessage.classList.contains('success')) {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 10000);
    }
}

