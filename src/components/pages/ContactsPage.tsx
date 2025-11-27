import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import cn from 'clsx';

export const ContactsPage: React.FC = () => {
  const theme = localStorage.getItem('theme');

  const developers = [
    {
      name: 'Anastasiia Kravchuk',
      role: 'Team lead',
      img: '/nice-gadgets-monolit/gadgets/img/developers/AnastasiiaKravchuk.jpg',
      text: 'Part strategist, part designer, part problem-solver. I’m leading Monolit Gadgets to create smart, stylish, and seamless digital experiences. Let’s build something that people will remember.',
      git: 'https://github.com/anastasia-kravchuk',
      mail: 'fs.anastasiia.kravchuk@gmail.com',
      linkedIn: 'http://linkedin.com/in/anastasiia-kravchuk-30615838a',
      telegram: 'https://t.me/a_krvk',
    },
    {
      name: 'Danylo Vilchauskas',
      role: 'PM',
      text: 'Project Manager by role, Developer at heart. I bridge the gap between planning deadlines and writing clean code.',
      img: '/nice-gadgets-monolit/gadgets/img/developers/DanyloVilchauskas.jpg',
      git: 'https://github.com/livadin',
      mail: 'danylo.vilchauskas@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/danylo-vilchauskas-64019530a/',
      telegram: 'https://t.me/llivadin',
    },
    {
      name: 'Ivan Kolesnyk',
      role: 'Developer',
      text: 'A traveler on the long road of software mastery, always learning new spells to improve my craft. Ever in pursuit of greater skill, I approach each project as another chapter in an ongoing quest.',
      img: '/nice-gadgets-monolit/gadgets/img/developers/IvanKolesnyk.jpg',
      git: 'https://github.com/Maevalar',
      mail: 'fe.ivan.kolesnyk@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/ivan-kolesnyk-68626338a/',
      telegram: 'https://t.me/AveGandalf',
    },
    {
      name: 'Marta Vatamaniuk',
      role: 'Developer',
      text: 'A developer who thinks creatively and consciously seeks ways to solve problems. I enjoy turning complex tasks into clear and effective solutions.',
      img: '/nice-gadgets-monolit/gadgets/img/developers/MartaVatamaniuk.jpg',
      git: 'https://github.com/vtmnkmarta',
      mail: 'vatamanukmarta@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/martavatamaniuk',
      telegram: 'https://t.me/marta_vtmnk',
    },
    {
      name: 'Bohdan Diatliuk',
      role: 'Developer',
      text: 'I’m a developer who approaches tasks with curiosity and logic, always looking for smart and practical ways to overcome challenges. I enjoy transforming intricate ideas into simple, reliable, and well-structured solutions.',
      img: '/nice-gadgets-monolit/gadgets/img/developers/BohdanDiatliuk.jpg',
      git: 'https://github.com/Bohdan-Diatliuk',
      mail: 'dyatlyuk.bohdan@gmail.com',
      linkedIn:
        'https://www.linkedin.com/in/bohdan-diatliuk-9257a3372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      telegram: 'https://t.me/netlyuk',
    },
  ];
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
        Monolit Team
      </h1>
      <article className="flex flex-col gap-8 w-full mx-auto lg:w-[800px]">
        {developers.map((developer) => (
          <div
            key={developer.name}
            className={cn(
              'group p-8 w-full h-auto border border-[rgba(255,255,255,0.25)]',
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
            <div
              className="self-center rounded-[50%] w-[200px] h-[200px] overflow-hidden shrink-0 group-hover:scale-[1.1]
            transition-all duration-300 ease-linear"
            >
              <img
                src={developer.img}
                alt="Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-center md:text-start">
                <h2 className="h2">{developer.name}</h2>
                <h4 className="h4 text-secondary">{developer.role}</h4>
              </div>
              <div className="h4 leading-[150%] text-center md:text-start">
                {developer.text}
              </div>
              <div className="flex gap-8">
                <a href={developer.git}>
                  <GitHubLogoIcon className="w-8 h-8" />
                </a>
                <a href={developer.linkedIn}>
                  <LinkedInLogoIcon className="w-8 h-8" />
                </a>
                <a href={`mailTo:${developer.mail}`}>
                  <EnvelopeClosedIcon className="w-8 h-8" />
                </a>
                <a href={developer.telegram}>
                  <PaperPlaneIcon className="w-8 h-8 -rotate-45 -translate-y-1.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
