import { FaUsers } from 'react-icons/fa';

export default function Hero() {
    return (
        <section
        className="relative w-full h-[652px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.png')" }}
        >
        {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6 pt-28 pb-14 flex flex-col gap-6 items-center font-poppins">
                <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                    Empower education for all<br />
                    through great partnership
                </h1>
                <p className="text-base md:text-lg text-white font-normal max-w-3xl">
                    Santos Creations Educational Foundation (SCEF) is committed to building and nurturing strategic partnerships that amplify your impact and drive sustainable development in education across Nigeria and Africa. Our partnerships span various sectors, including education, health, environment, and gender equality, and are crucial to achieving our mission of providing quality education and empowerment opportunities to all.
                </p>
                <button className="bg-[#3366CC] hover:bg-[#2852a4] transition px-8 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2">
                    <FaUsers className="text-base text-[#FFD700]" />
                    Partner with us
                </button>
            </div>
        </section>
  );
}
