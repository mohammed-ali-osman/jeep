import ColorSelector from "./Color";
import ButtonSelector from "./Button";

interface SelectorProps {
    title: string;
    type: "color" | "button";
    options: {
        label: string;
        value: string;
    }[];
    name: string;
    value?: string;
    onChange?: (value: string) => void;
}

export default function Selector(props: SelectorProps) {
    const { type, ...rest } = props;

    switch (type) {
        case "color":
            return <ColorSelector {...rest} />;
        case "button":
            return <ButtonSelector {...rest} />;
        default:
            return null;
    }
}