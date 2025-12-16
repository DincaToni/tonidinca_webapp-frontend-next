let DescriptiveHeroText = ({ children }: { children: string }) => {
  return (
    <>
      <p className="text-white/90 text-[24px] font-light">{children}</p>
    </>
  );
};

export default DescriptiveHeroText;
