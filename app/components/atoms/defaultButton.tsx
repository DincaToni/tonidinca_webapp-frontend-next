let DefaultButton = ({
  onClick,
  disabled,
  children,
}: {
  
    onClick?: any;
    disabled?:boolean;
  
  children: string;
}) => {
  return (
    <>
      <button className="languageSelectorButton" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default DefaultButton;
