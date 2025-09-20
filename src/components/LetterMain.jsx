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
                    <p className="text-2xl text-pink-500 ">
                         Realisation??? Yess!!
                    </p>
                    <div className="border-8 border-pink-300 p-4">
                         <p>
                              If we talk about realisation I just know that I
                              realise being so in love with you,i just want you
                              to know that there's no word I can use to describe
                              this feeling...I get it how bad I make you feel at
                              times and I know what you go through meri wajah
                              se..things really just get tough for you to deal
                              with (tough to aap bhi ho ) I know it well what
                              you want ,you don't need to give hints to me to
                              ever decode,the only thing left to decode is aap
                              seh kaise rhe ho mujhe????????? Like brother
                              you're so strong..I just can't express these
                              things in words so abhi ke liye just know ki I
                              love you and ykw aap mujhe isi khushi me ice cream
                              khila skte ho i won't mind🥰
                         </p>
                    </div>
               </div>
          </section>
     );
}

export default LetterMain;
