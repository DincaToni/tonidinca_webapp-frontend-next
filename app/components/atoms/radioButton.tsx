import DefaultButton from "./defaultButton"

let RadioButton = ({ checked, onClick, children }: { checked: boolean, onClick: () => void, children: string }) => {
    let isCheckedClass = (checked: boolean) => {
        console.log("returning button class")
        if (checked) return "activelanguageSelectorButton"
        return "languageSelectorButton"
    }

    return (<div>
        <DefaultButton classes={isCheckedClass(checked)} onClick={onClick}>{children}</DefaultButton>
    </div>)

}

export default RadioButton;