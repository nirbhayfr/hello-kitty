import { useRef } from "react";
import { CiHeart } from "react-icons/ci";

function Letter() {
     const letterflip = useRef();
     const container = useRef();
     const heart = useRef();
     const text = useRef();
     function handleClick() {
          letterflip.current.classList.add("animate-open");
          heart.current.classList.add("animate-disappear");

          setInterval(() => {
               text.current.classList.add("animate-appear");
          }, 1000);

          setInterval(() => {
               container.current.classList.add("animate-disappear");
          }, 5000);
          setInterval(() => {
               container.current.classList.add("hidden");
          }, 6000);
     }

     return (
          <section
               className="bg-gradient-to-br from-blue-100 to-pink-100 fixed h-screen w-full delay-1000 z-50"
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

                         <div
                              className="absolute top-0 p-4 h-[15rem] w-[22.5rem] opacity-0"
                              ref={text}
                         >
                              <div className="border-8 border-cyan-100 h-full w-full p-4 text-cyan-700">
                                   <p>Welcome love!!</p>
                                   <p>
                                        There is something that I'd like to say
                                   </p>
                              </div>
                         </div>
                    </div>
                    <p className="text-center text-cyan-700 font-borel">
                         Click to open
                    </p>
               </div>
          </section>
     );
}

export default Letter;
