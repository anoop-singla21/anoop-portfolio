// Validation utility for contact form and other forms

const validators = {
  name: (value) => {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    if (value.trim().length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, and basic punctuation';
    return '';
  },

  email: (value) => {
    if (!value.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
    if (value.length > 100) return 'Email must be less than 100 characters';
    return '';
  },

  subject: (value) => {
    if (!value.trim()) return 'Subject is required';
    if (value.trim().length < 5) return 'Subject must be at least 5 characters';
    if (value.trim().length > 200) return 'Subject must be less than 200 characters';
    return '';
  },

  message: (value) => {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    if (value.trim().length > 2000) return 'Message must be less than 2000 characters';
    return '';
  }
};

export const validateField = (fieldName, value) => {
  const validator = validators[fieldName];
  return validator ? validator(value) : '';
};

export const validateForm = (formData) => {
  const errors = {};
  let isValid = true;

  Object.keys(formData).forEach(field => {
    const error = validateField(field, formData[field]);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });

  return { isValid, errors };
};
