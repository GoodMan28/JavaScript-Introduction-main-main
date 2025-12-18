// use case
type User = {
  name: string;
  age: number;
  password: string;
};

const user: User = { name: "Abhineet", age: 21, password: "new@123" };

// despite being a const, we can change the values present in the user
// Solution: Either use the readonly prefix in the user type declaration (individually over the properties) or use the wrapper to make all the properties of a type as readonly

interface Config {
  readonly endpoint: string;
  readonly apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
