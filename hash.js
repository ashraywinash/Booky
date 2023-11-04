export function generateUniqueId(key) {
    // Define a seed value for the hash function
    const seed = 7;
  
    // Initialize a hash value
    let hash = seed;
  
    // Iterate through each character in the key
    for (let i = 0; i < key.length; i++) {
      // Update the hash using the ASCII code of the character
      hash = (hash * 31 + key.charCodeAt(i)) & 0xFFFFFFF;
    }
  
    // Convert the hash value to a hexadecimal string and take the first 8 characters
    const uniqueId = hash.toString(16).substring(0, 8);
  
    return uniqueId;
}
  
  // Example usage:
/* const inputKey = 'exampleKey';
const uniqueId = generateUniqueId(inputKey);
console.log(uniqueId); // Output will be a consistent 8-letter ID for the given key */
  

