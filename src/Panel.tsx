interface PanelProps {
    title: string;
    children: React.ReactNode;
    footer: React.ReactNode;
}

const Panel = ({ title, children, footer }: PanelProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
            <div>{footer}</div>
        </div>
    );
};

export default Panel;