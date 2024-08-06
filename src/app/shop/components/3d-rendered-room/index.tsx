// TODO: Figure out a way to make the room animate in 3D >>> tough one
export const AnimatedRoom = () => {
    return (
        <>
            <div className='min-h-[80vh] md:h-screen p-10 relative shop__image'>
                <div className='md:w-[70%] pt-[2rem] md:pt-[0] h-full md:items-center relative z-20 mx-auto flex justify-between flex-col md:flex-row '>
                    <h1 className='flex-[0.4] leading-[3rem] md:leading-[4rem] text-left text-[2.5rem] md:text-[3rem] font-medium text-white font-bodoni mb-6 md:mb-0'>
                        Sourced from the finest <br className='md:hidden' />{" "}
                        material
                    </h1>
                    <p className='flex-[0.45] text-white text-opacity-70 md:text-[1.25rem] leading-[2rem] md:leading-[2.5rem] '>
                        Gram furniture can leave a lasting mark on our lives and
                        set the stage for new aspirations. Since its creation in
                        2012, the Steph furniture has continued to reinvent
                        itself while symbolizing the definition of classic
                        elegance. A milestone in our history, it was the first
                        of its kind shipped directly from jamaica . Made by
                        specialised crafstmen this rare edition is a reminder
                        that quality furniture in our environment can make times
                        with loved ones a date to remember.
                    </p>
                </div>
                {/* <Image
                    src={animatedRoomImage}
                    alt='Animated Room'
                    className='z-0 top-0 left-0 w-full h-full absolute object-cover '
                    layout='responsive'
                    width={500}
                    height={300}
                /> */}
            </div>
        </>
    );
};
