import { RxCross1 } from "react-icons/rx";

function LetterMain({ setPictureOpen }) {
     return (
          <section className="bg-gradient-to-br from-blue-100 to-pink-100 fixed h-screen w-full animate-appear">
               <div className="absolute top-1/2 left-1/2 -translate-1/2 space-y-4">
                    <button
                         className="w-full flex justify-end cursor-pointer"
                         onClick={() => setPictureOpen(false)}
                    >
                         <RxCross1 className="size-6" />
                    </button>
                    <p className="text-2xl text-pink-500 text-center">
                         My heart belongs to you
                    </p>
                    <div className="border-8 border-pink-300 p-4 flex h-98 w-72">
                         <img src="/dawg.jpg" alt="Dawg" className="z-1" />
                    </div>
               </div>
          </section>
     );
}

export default LetterMain;
