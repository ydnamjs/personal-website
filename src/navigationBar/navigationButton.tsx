import './navigationBar.css';
import { Button } from "react-bootstrap";

export function SectionButton({
    labelText
}: {
    labelText: string,
}): JSX.Element {
    
    return(
        <Button className ="navigation-button">{labelText}</Button>
    )
}