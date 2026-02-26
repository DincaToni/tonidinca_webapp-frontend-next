let DefaultButton = ({
  props,
  children,
}: {
  props?: {
    handleClick: any;
  };
  children: string;
}) => {
  return (
    <>
      <button className="languageSelectorButton" onClick={props?.handleClick}>
        {children}
      </button>
    </>
  );
};

export default DefaultButton;
