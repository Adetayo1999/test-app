interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return <div className='mx-auto w-[90%] md:w-[90%]'>{children}</div>;
};
