import { useState } from "react";

export function useForm(valoresIniciales) {
  const [valores, setValores] = useState(valoresIniciales);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => setValores(valoresIniciales);

  return { valores, handleChange, reset, setValores };
}