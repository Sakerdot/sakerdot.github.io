export async function get() {
    return {
        body: JSON.stringify('https://en.wikipedia.org/wiki/The_C_Programming_Language'),
    };
}