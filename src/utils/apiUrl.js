let apiUrl;

const { NODE_ENV, REACT_APP_SERVER_URL, REACT_APP_LOCAL_SERVER_URL } =
  process.env;

if (NODE_ENV === "production") {
  apiUrl = REACT_APP_SERVER_URL;
} else {
  apiUrl = REACT_APP_LOCAL_SERVER_URL;
}

console.log(apiUrl)

export default apiUrl;
