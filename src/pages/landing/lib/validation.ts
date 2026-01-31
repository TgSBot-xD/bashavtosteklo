// Regex для полного номера с +7 или 8
export const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}(?:[\s-]?\d{2}){2}$/;

// Regex для номера без префикса +7 (10 цифр с возможными разделителями)
export const phoneWithoutPrefixRegex = /^\(?\d{3}\)?[\s-]?\d{3}(?:[\s-]?\d{2}){2}$/;
