const HomeContainer = ({ children }) => {
  return (
    <div className="h-screen md:mx-32 sm:mx-12 p-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

export default HomeContainer;
