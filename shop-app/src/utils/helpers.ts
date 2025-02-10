/**
 * Format a price in USD currency with commas and dollar sign.
 * @param {number} price - The price to format.
 * @returns {string} The formatted price.
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

/**
 * Format a date in MM/DD/YYYY format.
 * @param {string} date - The date to format.
 * @returns {string} The formatted date.
 */
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
