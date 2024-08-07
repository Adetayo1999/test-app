import { HeroSection } from "@/common/components/hero/Hero";

export default function Home() {
    return (
        <div className=''>
            <div className='flex flex-col space-y-10'>
                <div>
                    <HeroSection />
                </div>
            </div>
        </div>
    );
}
