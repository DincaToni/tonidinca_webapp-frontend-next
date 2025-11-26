import DefaultButton from "../atoms/defaultButton";

let LanguageSelector = () => {
  return (
    <div className="flex justify-items-start gap-[10px] bg-white/15 rounded-[50px] p-[5px]">
      <DefaultButton>EN</DefaultButton>
      <DefaultButton>DE</DefaultButton>
      <DefaultButton>RO</DefaultButton>
    </div>
  );
};

export default LanguageSelector;
