import { RxCross1 } from "react-icons/rx";

function LetterMain({ setPictureOpen }) {
     return (
          <section className="bg-gradient-to-br from-blue-100 to-pink-100 absolute h-screen w-full animate-appear">
               <div className="absolute top-1/2 left-1/2 -translate-1/2 space-y-4">
                    <button
                         className="w-full flex justify-end cursor-pointer"
                         onClick={() => setPictureOpen(false)}
                    >
                         <RxCross1 className="size-6" />
                    </button>
                    <p className="text-2xl text-pink-500 ">
                         Here's something close to my heart
                    </p>
                    <div className="border-8 border-pink-300 p-4">
                         <p>picture</p>
                    </div>
               </div>
          </section>
     );
}

export default LetterMain;
