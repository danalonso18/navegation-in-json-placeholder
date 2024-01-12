export const getPostApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const payload = await response.json();

    return payload;
}