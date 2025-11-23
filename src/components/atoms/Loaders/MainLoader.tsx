import { PulseLoader } from "react-spinners";

type Props = {
  className?: string;
  color?: string;
  speedMultiplier?: number;
  size?: number;
  loading?: boolean;
};

export const MainLoader: React.FC<Props> = ({
  className,
  color = '#B4BDC3',
  speedMultiplier = 0.7,
  size = 15,
  loading = true,
}) => {
  return (
    <PulseLoader
      className={className}
      color={color}
      speedMultiplier={speedMultiplier}
      size={size}
      loading={loading}
    />
  );
};
