import { Dropdown } from "../../molecules/Dropdown/Dropdown";

type Props = {
  currentValue: string;
  onChange: (value: string) => void;
};

export const ProductSort: React.FC<Props> = ({ currentValue, onChange }) => {
  return (
    <Dropdown
      description="Sort by"
      label={currentValue}
      currentValue={currentValue}
      items={["Newest", "Oldest", "Cheapest", "Most expensive"]}
      onChange={onChange}
    />
  );
};