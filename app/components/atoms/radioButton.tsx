import DefaultButton from "./defaultButton"

let RadioButton = ({checked,onClick ,children}:{checked: boolean,onClick: void, children: string}) =>{
return(<div>
    <DefaultButton onClick={onClick}>{children}</DefaultButton>
</div>)

}

export default RadioButton;