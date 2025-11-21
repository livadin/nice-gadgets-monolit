import { useEffect, useState } from "react";
import type { CategoryProduct } from "../../types/CategoryProduct";
import { getPhones } from "../../utilities/fetchApi";

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<CategoryProduct[]>([]);

  useEffect(() => {
    getPhones().then((phonesFromServer) => {
      setPhones(phonesFromServer);
    });
  }, []);

  console.log(phones);

  return <section></section>;
};
