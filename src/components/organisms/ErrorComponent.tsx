export const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-20">
      <img
        src={`${import.meta.env.BASE_URL}gadgets/img/product-not-found.png`}
        alt="Service unavailable"
        className="w-[320px]"
      />
      <p className="mt-10 text-xl">Oops... Something went wrong</p>
    </div>
  );
};
