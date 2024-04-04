export default function Tabs({children, buttons, buttonsContainer = "menu"}) {
    const ButtonsConatainer = buttonsContainer
    return <>
        <ButtonsConatainer>
            {buttons}
        </ButtonsConatainer>
        {children}
    </>
}