import { useRef } from "react";
import { CiHeart } from "react-icons/ci";

function Letter() {
     const letterflip = useRef();
     const container = useRef();
     const heart = useRef();
     function handleClick() {
          letterflip.current.classList.add("animate-open");
          heart.current.classList.add("animate-disappear");
          setInterval(() => {
               container.current.classList.add("animate-disappear");
          }, 1000);
          setInterval(() => {
               container.current.classList.add("hidden");
          }, 2000);
     }

     return (
          <section
               className="bg-gradient-to-br from-blue-100 to-pink-100 absolute h-screen w-full delay-1000"
               ref={container}
          >
               <div
                    className="absolute top-1/2 left-1/2 -translate-1/2 space-y-4"
                    onClick={handleClick}
               >
                    <img
                         src="/entry.gif"
                         alt=""
                         className="absolute size-50 z-30 right-0 -top-40"
                    />
                    <div
                         className="bg-pink-500 rounded-full size-12 absolute top-[41%] left-1/2 -translate-1/2 z-20 text-white p-1"
                         ref={heart}
                    >
                         <CiHeart className="size-10" />
                    </div>
                    <div className="w-[22.5rem] h-[15rem] bg-gradient-to-b from-white to-blue-50 rounded-sm border-1 border-blue-300 shadow-2xl">
                         <div
                              className="w-full h-full bg-blue-200 [clip-path:polygon(50%_50%,_0_0,_100%_0)] z-10"
                              ref={letterflip}
                         ></div>
                    </div>
                    <p className="text-center text-cyan-500 uppercase">
                         Click to open
                    </p>
               </div>
          </section>
     );
}

export default Letter;
