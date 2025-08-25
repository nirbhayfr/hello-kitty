import { RxCross1 } from "react-icons/rx";

function LetterMain({ setLetterOpen }) {
     return (
          <section className="bg-gradient-to-br from-blue-100 to-pink-100 fixed min-h-screen w-full animate-appear">
               <div className="absolute top-1/2 left-1/2 -translate-1/2 space-y-4 py-8 w-3/4">
                    <button
                         className="w-full flex justify-end cursor-pointer"
                         onClick={() => setLetterOpen(false)}
                    >
                         <RxCross1 className="size-6" />
                    </button>
                    <p className="text-2xl text-blue-500 ">
                         Here is a letter for you
                    </p>
                    <div className="border-8 border-blue-300 p-4">
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Magni nemo fugit animi assumenda. Porro
                              quibusdam vel hic explicabo culpa deserunt, omnis
                              modi accusantium fugit ratione. Quibusdam dolores
                              delectus modi illo consectetur laudantium! Iste
                              corporis, non doloremque tenetur eos provident
                              illum aliquid sequi cum, neque, beatae iusto
                              reiciendis! Rem, nesciunt omnis!
                         </p>
                    </div>
               </div>
          </section>
     );
}

export default LetterMain;
