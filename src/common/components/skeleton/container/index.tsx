interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`mx-auto w-[90%] md:w-[90%] ${className}`}>
            {children}
        </div>
    );
};
