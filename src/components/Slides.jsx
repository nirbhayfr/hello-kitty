import HomePopupMain from "./HomePopupMain";

function Slides({ setLetterOpen, setPictureOpen }) {
     return (
          <section className="bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen w-full px-8 py-12 flex flex-col gap-12 items-center text-stone-700">
               <div className="space-y-4">
                    <h1 className="text-pink-600 text-2xl md:text-5xl text-center">
                         Heyyyyyyyyy!!
                    </h1>
                    <p className="text-center md:text-lg">
                         Waise aajkal koi acchi movie nhi aa rhi~
                    </p>
               </div>

               <HomePopupMain
                    setLetterOpen={setLetterOpen}
                    setPictureOpen={setPictureOpen}
               />

               <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-pink-400 rounded-lg">
                         <div className="border-2 border-stone-800 rounded-lg p-4 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2">
                              <p className="border-2 border-stone-600 p-6 rounded-lg">
                                   I know I've been distant and I'm truly sorry.
                              </p>

                              <img src="/gif2.gif" alt="" />
                              <p className="text-center">
                                   Mera khel khatam ho jyega agar aap overthink
                                   krte rhe to
                              </p>
                         </div>
                    </div>

                    <div className="bg-pink-400 rounded-lg flex">
                         <div className="border-2 border-stone-800 rounded-lg p-4 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2">
                              <p className="border-2 border-stone-600 p-6 rounded-lg">
                                   I know sometimes I get on your nerves or
                                   maybe every time.
                              </p>

                              <img src="/gif3.gif" alt="" />
                              <p className="text-center">
                                   Lekin aap kr hi kya loge
                              </p>
                         </div>
                    </div>
               </div>

               <div className="bg-pink-400 rounded-lg flex">
                    <div className="border-2 border-stone-800 rounded-lg p-8 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2">
                         <h2 className="text-pink-600 text-2xl md:text-5xl text-center">
                              Something we need to hear?
                         </h2>
                         <p className="text-center bg-white p-3 border-2 border-dashed border-pink-300 rounded-lg">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nemo quis eveniet deleniti nostrum, incidunt
                              optio blanditiis similique dolorum harum delectus.
                         </p>
                    </div>
               </div>
          </section>
     );
}

export default Slides;
