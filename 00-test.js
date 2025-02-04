require('dotenv').config();

// Access the environment variables
const site_url = process.env.site_url;
const username = process.env.username;
const password = process.env.password;

console.log(`URL: ${site_url}`);
console.log(`Username: ${username}`);
console.log(`Password: ${password}`);