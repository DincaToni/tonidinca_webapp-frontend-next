let DefaultButton = ({
  onClick,
  children,
}: {
  
    onClick?: any;
  
  children: string;
}) => {
  return (
    <>
      <button className="languageSelectorButton" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default DefaultButton;
