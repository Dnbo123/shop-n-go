const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Fetches all products from the API and returns them as a JSON object
export const fetchProducts = async () => {
  // Make a GET request to the API's products endpoint
  const response = await fetch(`${API_URL}/products`);
  // If the response is not OK, throw an error
  if (!response.ok) throw new Error('Failed to fetch products');
  // Return the response as a JSON object
  return response.json();
};

// Creates a new product on the API and returns the newly created product
export const createProduct = async (product: any) => {
  // Make a POST request to the API's products endpoint with the product data
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  // If the response is not OK, throw an error
  if (!response.ok) throw new Error('Failed to create product');
  // Return the response as a JSON object
  return response.json();
};
  /**
   * Updates a product on the API and returns the updated product
   * @param id ID of the product to update
   * @param product Updated product data
   * @returns The updated product
   */
  export const updateProduct = async (id: string, product: any) => {
    // Make a PUT request to the API's products endpoint
    // with the product ID and updated product data
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    // If the response is not OK, throw an error
    if (!response.ok) throw new Error('Failed to update product');
    // Return the response as a JSON object
    return response.json();
  };

  /**
   * Deletes a product from the API
   * @param id ID of the product to delete
   * @returns The deleted product
   */
  export const deleteProduct = async (id: string) => {
    // Make a DELETE request to the API's products endpoint
    // with the product ID
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    // If the response is not OK, throw an error
    if (!response.ok) throw new Error('Failed to delete product');
    // Return the response as a JSON object
    return response.json();
  };
