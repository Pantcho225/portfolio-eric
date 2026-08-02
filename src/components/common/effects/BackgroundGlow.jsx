const BackgroundGlow = () => {
  return (
    <>
      <div
        className="
          absolute
          -top-40
          -left-32
          h-96
          w-96
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-600/10
          blur-[180px]
        "
      />
    </>
  );
};

export default BackgroundGlow;