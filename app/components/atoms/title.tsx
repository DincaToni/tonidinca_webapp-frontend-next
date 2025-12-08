let Title = ({ type, children }: { type: string; children: string }) => {
  return <h1 className={type}>{children}</h1>;
};

export default Title;
