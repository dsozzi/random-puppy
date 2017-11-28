/**
 * Get a random dog image from its breed
 * @param {string} breed - The breed for which we are requesting a picture.
 */
export async function getDogByBreed(breed) {
    const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`).catch(message => {
        console.warn(message);
    });
    const data = await resp.json();
    return data.message;
}

/**
 * Get all dog breeds
 */
export async function getBreeds() {
    const resp = await fetch(`https://dog.ceo/api/breeds/list`).catch(message => {
        console.warn(message);
    });
    const data = await resp.json();
    return data.message;
}
