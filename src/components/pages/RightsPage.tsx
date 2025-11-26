import {
  CheckCircledIcon,
  UpdateIcon,
  LockClosedIcon,
  PersonIcon,
  Pencil2Icon,
} from '@radix-ui/react-icons';
import cn from 'clsx';


export const RightsPage: React.FC = () => {
  const theme = localStorage.getItem('theme');

  const rigths = [
    {
      title: `Product Authenticity`,
      icon: <CheckCircledIcon className="w-8 h-8" />,
      description: `We guarantee that all Apple products offered in our store are 100% authentic and sourced exclusively from official partners.
        Every device includes a unique serial number that can be verified on the Apple website.
        We do not sell replicas, unauthorized refurbished devices, or modified products unless clearly stated in the product description.`,
    },
    {
      title: `Returns & Refunds`,
      icon: <UpdateIcon className="w-8 h-8" />,
      description: `If the product does not meet your expectations, you may return it within 14 days of delivery,
        provided it is in its original condition and includes all accessories and packaging.
        Refunds are processed using the same payment method used during checkout.
        Full return and warranty terms are available in the Returns and Warranty section.`,
    },
    {
      title: `Privacy Policy`,
      icon: <LockClosedIcon className="w-8 h-8" />,
      description: `We process your personal data in compliance with applicable 
        laws and use it only to fulfill orders, improve our services, and enhance your shopping experience.
        Your data is never shared with third parties without your consent, except when required by law.`,
    },
    {
      title: `Customer Responsibilities`,
      icon: <PersonIcon className="w-8 h-8" />,
      description: `By placing an order, you confirm that the information you provide is accurate and up to date. 
        You are responsible for ensuring that the selected product model, specifications, and configuration match your needs.
        Please keep all documents necessary for warranty service and handle the device with care.`,
    },
    {
      title: `Policy Updates`,
      icon: <Pencil2Icon className="w-8 h-8" />,
      description: `We may update these policies periodically to comply with new legal requirements or improve our services. 
        Any updates take effect immediately upon publication on this page. We recommend reviewing this section regularly to stay informed about our current terms.`,
    },
  ]
  
  return (
    <section className="py-0 h-auto lg:py-8">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        {theme === 'dark' ?
          <source
            src="/nice-gadgets-monolit/gadgets/img/video/contactsBG.mp4"
            type="video/mp4"
          />
        : <source
            src="/nice-gadgets-monolit/gadgets/img/video/contactsBgWhite.mp4"
            type="video/mp4"
          />
        }
      </video>
      <h1 className="relative h1 text-center mb-8 z-10 lg:mb12">
        Rights & Policies
      </h1>
      <article className="flex flex-col gap-8 w-full mx-auto lg:w-[800px]">
        {rigths.map((right) => (
          <div
            key={right.title}
            className={cn(
              'group p-4 md:p-8 w-full h-auto border border-[rgba(255,255,255,0.25)]',
              'text-primary flex flex-col gap-8 rounded-2xl ',
              'transition-all duration-300 ease-linear hover:-translate-y-2.5 md:flex-row', 
              {
                'bg-[#571573]/15': theme === 'light',
                'bg-[#fff]/15': theme === 'dark',
                'hover:shadow-[0px_0px_24px_1.5px_rgba(87,21,115,0.7)]':
                  theme === 'light',
                'hover:shadow-[0px_0px_24px_1.5px_rgba(255,255,255,0.7)]':
                  theme === 'dark',
                'backdrop-blur-[3px]': theme === 'light',
                'backdrop-blur-[10px]': theme === 'dark',
              },
            )}
          >
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="relative flex flex-col items-center w-full
                  after:content-[''] after:block after:w-full after:h-px after:bg-element after:my-4">
                <div className="flex gap-4 items-center">
                  {right.icon}
                  <h2 className="h2">
                    {right.title}
                  </h2>
                </div>
              </div>
                
              <div className="md:h4 leading-[150%] text-center md:text-start">
                {right.description}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
