const axios = require('axios');

async function main() {
    let response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.id);
}
main();
