import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { API_URI } from "../../pages/api/collection";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";

// Optionslar query içerisinde verilebildiği gibi yine instance içerisinde de verilebilir.
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

export const Fetcher = () => {
  const [number, setNumber] = useState(1);

  // QueryKey bir dependenciyi temsil eder ve eğer bu dependenciyi değiştirirsek verileri yeniler.

  const { isLoading, error, data, isFetched, refetch, dataUpdatedAt, status } =
    useQuery(
      ["users", number],
      () =>
        fetch(`${API_URI}/user`).then((res) => res.json().then((data) => data)),
      {
        // Bu verileri 1 saniye boyunca fresh tutacak ve her 1 saniyede bir yenileyecek
        staleTime: 1000005000,

        // Başarıyla verileri çektiğimizde çalışacak fonksiyon
        onSuccess: (data) => {
          client.invalidateQueries("users");
          console.log("onSuccess", data);
        },

        // select: (data) => {
        //   const _data = data.filter((item: any) => item.id === 1);
        //   console.log(_data);
        //   return { _data };
        // },
        // Ekrana Focuslandığında yenileme işlemi yapacak
        // refetchOnMount: false,
        // refetchOnWindowFocus: true,

        //Arka Planda Yenileme İşlemleri
        // refetchIntervalInBackground: true,
        // refetchInterval: 10000,

        //Bu verileri 5 saniye boyunca cacheleyecek
        // cacheTime: 1000,

        //Pagination için kullanılır
        // keepPreviousData: false,

        // Eğer verileri otomatik yenilemek istemiyorsak false yapabiliriz, butona tıklanıldığında verileri günceller
        enabled: false,
      }
    );
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>Error</p> : null}
      {data ? "hello" : null}
      <br />
      {number}
      <br />
      <button onClick={() => setNumber(Math.random)}>Değiştir</button>
      <br />
      <button onClick={() => refetch()}>Yenile</button>
      {isLoading ? (
        <p>Veriler Çekiliyor</p>
      ) : (
        <div> {JSON.stringify(data)}</div>
      )}

      <hr />
    </div>
  );
};
