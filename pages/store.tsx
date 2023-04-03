import React from "react";
import {
  useArray,
  useDogStore,
  useMultiple,
  useOmit,
  useUserStore,
} from "../store/useUserStore";
import { shallow } from "zustand/shallow";

export default function Store() {
  const {
    user: { age, surname, name },
    increaseAge,
    decreaseAge,
  } = useUserStore();

  const nut = useMultiple((state) => state.nuts);

  const { nuts, honey, renderCount } = useMultiple(
    (state) => ({
      nuts: state.nuts,
      honey: state.honey,
      renderCount: state.renderCount,
    }),
    shallow // Bir değişiklik olduğunda render edilmesini sağlar
  );
  const [a, b] = useArray((state: any) => [state.a, state.b], shallow); // A ya da b değerinden biri değiştiğinde render edilir.

  const omits = useOmit();

  const { action } = useArray();

  const paw = useDogStore((state) => state.paw);

  const handler = () => {
    useDogStore.setState({ paw: 3 });
    useDogStore.subscribe(console.log); // subscribe herhangi bir değişiklik olduğunda ne yapılacağını belirleyen fonksiyondur.
  };
  return (
    <div>
      <div>
        <h2>User Name:{name}</h2>
        <h2>User Surname:{surname}</h2>
        <h2>User Age:{age}</h2>
        <button onClick={increaseAge}>Inc Age</button>
        <button onClick={decreaseAge}>Dec Age</button>
      </div>
      <div>
        <p>{nut}</p>
        <hr />
        <span>Nuts: {nuts}</span>
        <br />
        <span>Honey: {honey}</span>
        <hr />
        <span>a: {a}</span>
        <br />
        <span>b: {b}</span>
        <hr />
        <h2>Omit Store</h2>
        Tuna: {omits.tuna} | Salmon: {omits.salmon}
        <br />
        <button onClick={omits.delAll}> Del All</button>
        <button onClick={omits.delTuna}> Del Tuna</button>
        <hr />
        <button onClick={action}>Actions</button>
      </div>
      <div>
        <hr />
        paw:{paw}
        <br />
        <button onClick={() => handler()}>Unsub</button>
      </div>
    </div>
  );
}
