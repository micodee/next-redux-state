import { useDispatch, useSelector } from "react-redux";
import { update } from "@/store/productSlice";
import { useState } from "react";

export default function Home() {
  const dispatch = useDispatch();

  const { title, price } = useSelector((state) => state.product);

  const [stateTitle, setTitle] = useState("");
  const [statePrice, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault()
    setTitle('ubah title')
    setPrice('123')
    dispatch(update({ title: stateTitle, price: statePrice }));
  };

  return (
    <>
      <div>
        <h4>Judul: {title}</h4>
        <h4>Harga: {price}</h4>
        <button type="submit" onClick={submit}>
          Update
        </button>
      </div>
    </>
  );
}
