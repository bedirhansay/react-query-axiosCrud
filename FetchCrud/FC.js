function req(url, data = false, method = "GET") {
  return new Promise(async (resolve, reject) => {
    const options = {
      method,
    };
    if (data && method === "POST") {
      options.body = JSON.stringify(data);
    }
    const res = await fetch(url);
    const d = await res.json();
    if (res.ok) {
      resolve(d);
    } else {
      reject(d);
    }
  });
}

// post and get func will use req func with params

export const post = (url, data) => req(url, data, "POST");
export const get = (url) => req(url);

// those function will be used for req

export const getPost = () => get("https://jsonplaceholder.typicode.com/users");
export const getPostDetails = (id) =>
  get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const newPost = (data) =>
  post("https://jsonplaceholder.typicode.com/posts", data);
