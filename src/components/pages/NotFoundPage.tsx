export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <img
        src={`${import.meta.env.BASE_URL}gadgets/img/page-not-found.png`}
        alt="Service unavailable"
        className="w-[320px]"
      />
      <p className="mt-10 text-xl text-white-dark-2 transition-colors duration-300">Oops... Page not found</p>
    </div>
  );
}