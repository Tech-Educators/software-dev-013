export default function FancyButton({handleClick}) {
    return (
        <button onClick={() => {
            handleClick()
        }}>Click me! Or me!</button>
    )
}