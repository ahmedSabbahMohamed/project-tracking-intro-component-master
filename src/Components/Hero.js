import hero from "../images/illustration-devices.svg";

export default function Hero() {
    return(
        <main className="relative overflow-hidden">
            <section className="flex items-center flex-col-reverse gap-12 md:flex-row md:justify-between md:gap-4 max-w-7xl p-4 mx-auto my-8">
                <div className="flex-1 text-center md:text-left">
                    <div>
                        <b className="font-bold py-1 px-3 mr-4 rounded-full bg-vdblue text-lgblue uppercase inline-block">new</b>
                        <span className="inline-block tracking-widest uppercase text-xl text-gblue">Monograph Dashboard</span>
                    </div>
                    <h1 className="text-vdblue text-6xl font-bold uppercase my-6">
                        Powerful insights into your team
                    </h1>
                    <p className="text-dgblue text-xl my-6">
                    Project planning and time tracking for agile teams
                    </p>
                    <div>
                        <button
                            className="inline-block bg-Red uppercase text-xl px-6 py-3 mr-3 rounded-lg shadow-md text-lgblue hover:opacity-80"
                        >
                            Schedule a demo
                        </button>
                        <span className="inline-block tracking-widest uppercase text-lg text-gblue m-2">
                            to see a live preview
                        </span>
                    </div>
                </div>

                <div className="flex-1">
                    <img src={hero} alt="hero" />
                </div>
            </section>
        </main>
    );
}