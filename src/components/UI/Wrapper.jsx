const Wrapper = ({ children }) => {
  return (
    <div className="h-[110vh] md:mx-32 sm:mx-12 p-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

export default Wrapper;
