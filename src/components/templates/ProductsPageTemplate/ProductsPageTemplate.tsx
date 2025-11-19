import type { CategoryProduct } from '../../../types/CategoryProduct';
import { ArrowLeftIcon } from '../../atoms/Icons/ArrowLeftIcon';
import { HomeButton } from '../../atoms/UtilityButton';
import { Dropdown } from '../../molecules/Dropdown/Dropdown';

type Props = {
  title: string;
  products: CategoryProduct;
};

export const ProductsPageTemplate: React.FC<Props> = ({ title }) => {
  return (
    <div className="container mx-auto pt-6 pb-16 lg:pb-20">
      <div className='flex items-center gap-2 text-sm text-secondary mb-6 lg:mb-10'>
        <HomeButton />
        <ArrowLeftIcon />
        <p>Phones</p>
      </div>
      <h1 className="mb-2 text-primary font-extrabold leading-[41px] md:leading-14 text-[32px] md:text-[48px] tracking-[-1%]">
        {title}
      </h1>
      <p className='text-secondary text-[14px] leading-[21px] mb-8 md:mb-10'>95 models</p>

      <div className='flex flex-row gap-4 mb-6'>
        <Dropdown description='Sort by' label={'Newest'} items={[]} />
        <Dropdown description='Items on page' label={'16'} items={[]} />
      </div>
      
    </div>
  );
};
