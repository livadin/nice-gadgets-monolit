import { Dropdown } from "../../molecules/Dropdown/Dropdown";

type ItemsOnPageProps = {
  currentValue: number;
  onChange: (value: number) => void;
};

export const ItemsOnPage: React.FC<ItemsOnPageProps> = ({ currentValue, onChange }) => {
  return (
    <Dropdown
      description="Items on page"
      label={String(currentValue)}
      currentValue={String(currentValue)}
      items={["8", "16", "24"]}
      onChange={(newValue) => onChange(Number(newValue))}
    />
  );
};