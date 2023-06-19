export function validateEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  // Add your password validation logic here
  // For example, you can check the length or complexity of the password
  return password.length >= 6;
}
