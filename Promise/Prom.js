export const Prom = () => {
  const user = () => {
    return new Promise(async (resolve, reject) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      if (res.ok) {
        resolve(console.log(data));
      } else {
        reject(console.log("hata"));
      }
    });
  };

  return (
    <div>
      <button onClick={user}>Get</button>
    </div>
  );
};
