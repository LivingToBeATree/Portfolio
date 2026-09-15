import Typewriter from "typewriter-effect"

export default function Init({ onComplete }) {
    return (
        <div className="w-screen h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden font-mono select-none">
            <div className="text-center max-w-lg px-6 leading-relaxed">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(35)
                            .typeString('<span class="text-xs text-neutral-500 tracking-[0.2em] uppercase">// SYSTEM BOOT SEQUENCE</span><br/><br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> INITIALIZING PRIMARY USER PROFILE...<br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> LOADING SYSTEM CORE...<br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> ESTABLISHING NETWORK CONNECTION...<br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> LOADING UI MODULES...<br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> COMPILING GRAPHICS ENGINE...<br/>')
                            .pauseFor(400)
                            .typeString('<span class="text-primary">\u2713</span> BOOT COMPLETE. READY.<br/><br/><br/>')
                            .pauseFor(700)
                            .callFunction(() => {
                                onComplete();
                            })
                            .start();
                    }}
                    options={{
                        cursor: '█',
                        delay: 30
                    }}
                />
            </div>
        </div>
    )
}