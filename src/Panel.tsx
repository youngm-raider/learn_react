interface PanelProps {
    title: string;
    children: React.ReactNode;
}

const Panel = ({ title, children }: PanelProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default Panel;