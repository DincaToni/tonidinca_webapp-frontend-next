let DefaultButton = ({
  classes,
  onClick,
  disabled,
  children,
}: {
  classes?: string;
  onClick?: any;
  disabled?: boolean;

  children: string;
}) => {
  return (
    <>
      <button className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export default DefaultButton;
