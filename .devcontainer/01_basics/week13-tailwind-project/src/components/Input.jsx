import '../App.css'

export default function Button({disabled, children, onclick}) {
    return (
        <span onClick={onclick} className={}>
            {children}
        </span>
    );
}