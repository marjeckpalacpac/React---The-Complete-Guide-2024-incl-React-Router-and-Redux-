export default function Tabs({children, buttons, buttonsContainer}) {
    const ButtonsConatainer = buttonsContainer
    return <>
        <ButtonsConatainer>
            {buttons}
        </ButtonsConatainer>
        {children}
    </>
}