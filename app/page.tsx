import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import WhatIBuild from '@/components/WhatIBuild';
import Projects from '@/components/Projects';
import AboutMe from '@/components/AboutMe';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="bg-[#0D0D0D] min-h-screen text-white selection:bg-blue-500/30">
            {/* Scrollytelling Section */}
            <div className="relative h-[500vh]">
                <ScrollyCanvas numFrames={128} />
                <Overlay />
            </div>

            {/* Content Sections */}
            <div className="relative z-20 -mt-[50vh] bg-gradient-to-b from-transparent to-[#0D0D0D] pt-[50vh]">
                <WhatIBuild />
                <Projects />
                <AboutMe />
                <Leadership />
                <Contact />
            </div>
        </main>
    );
}
