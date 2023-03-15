import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { API_URI } from "../../pages/api/collection/collections";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Link from "next/link";
import { QueryRes, useUsersRes } from "../../Hooks/GetData";
// Optionslar query içerisinde verilebildiği gibi yine instance içerisinde de verilebilir.
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

export const ReactQuery = () => {
  const [number, setNumber] = useState(1);

  // QueryKey bir dependenciyi temsil eder ve eğer bu dependenciyi değiştirirsek verileri yeniler.

  const { isLoading, error, data, isFetched, refetch, dataUpdatedAt, status } =
    useQuery(
      ["users", number],
      () =>
        fetch(`${API_URI}/user`).then((res) => res.json().then((data) => data)),
      {
        // Bu verileri 1 saniye boyunca fresh tutacak ve her 1 saniyede bir yenileyecek
        staleTime: 500000,

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
        refetchOnMount: true,
        refetchOnWindowFocus: true,

        //Arka Planda Yenileme İşlemleri
        // refetchIntervalInBackground: true,
        // refetchInterval: 10000,

        //Bu verileri 5 saniye boyunca cacheleyecek
        // cacheTime: 1000,

        //Pagination için kullanılır
        // keepPreviousData: false,

        // Eğer verileri otomatik yenilemek istemiyorsak false yapabiliriz, butona tıklanıldığında verileri günceller
        enabled: false,
        refetchInterval: 5000,
      }
    );

  // const { isLoading, error, data, isFetched, refetch, dataUpdatedAt, status } =
  //   useUsersRes();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data?.map((item: any) => (
        <Link href={`sup/${item.id}`} key={item.id}>
          {item.id} - {item.name}
        </Link>
      ))}
      <hr />
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  );
};
