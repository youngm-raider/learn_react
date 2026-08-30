type ActionButtonProps = {
    label: string;
    onAction: () => void;
}

const ActionButton = ({ label, onAction}: ActionButtonProps) => {

    return (
        <button onClick={onAction}>{label}</button>
    )
};

export default ActionButton;