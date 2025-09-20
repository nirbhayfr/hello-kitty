import { useAudioPlayer } from "react-use-audio-player";
import HomePopupMain from "./HomePopupMain";

function Slides({ setLetterOpen, setPictureOpen }) {
     const { togglePlayPause } = useAudioPlayer("/music.mp3", {
          autoplay: true,
     });
     return (
          <section className="bg-gradient-to-br from-blue-100 to-pink-100 min-h-screen w-full px-8 py-12 flex flex-col gap-12 items-center text-stone-700">
               <div className="flex flex-col items-end fixed right-3 top-3 z-50 text-sm gap-2">
                    <p className="bg-pink-200 rounded-full p-2">
                         Click to play music 🎵
                    </p>
                    <button
                         className="bg-blue-200 rounded-full p-3 flex"
                         onClick={togglePlayPause}
                    >
                         <span className="absolute animate-ping">🎶</span>🎶
                    </button>
               </div>

               <div className="space-y-4">
                    <h1 className="text-pink-600 text-2xl md:text-5xl text-center">
                         Heyyyyyyyyy!! 💝❣
                    </h1>
                    <p className="text-center md:text-lg">
                         {
                              "Abhi mujhe kaafi bhaari realisation hua,\nbatau kya?🥰🥰"
                         }
                    </p>
               </div>

               <HomePopupMain
                    setLetterOpen={setLetterOpen}
                    setPictureOpen={setPictureOpen}
               />

               <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-pink-400 rounded-lg flex">
                         <div className="border-2 border-stone-800 rounded-lg p-4 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2 w-full">
                              <p className="border-2 border-stone-600 p-6 rounded-lg text-center">
                                   I know I've been distant and I'm truly sorry.
                                   💓
                              </p>

                              <img src="/gif2.gif" alt="" />
                              <p className="text-center">
                                   Mera khel khatam ho jyega agar aap overthink
                                   krte rhe to 😔(or whatever you call it rather
                                   than overthinking)
                              </p>
                         </div>
                    </div>

                    <div className="bg-pink-400 rounded-lg flex">
                         <div className="border-2 border-stone-800 rounded-lg p-4 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2 w-full">
                              <p className="border-2 border-stone-600 p-6 rounded-lg text-center">
                                   I know sometimes I get on your nerves or
                                   maybe every time. 😛
                              </p>

                              <img src="/gif3.gif" alt="" />
                              <p className="text-center">
                                   Lekin aap kr hi kya loge 😝😝
                              </p>
                         </div>
                    </div>
               </div>

               <div className="bg-pink-400 rounded-lg flex">
                    <div className="border-2 border-stone-800 rounded-lg p-8 flex flex-col items-center gap-4  shadow-2xl bg-white/90 -translate-2">
                         <h2 className="text-pink-600 text-2xl md:text-5xl text-center">
                              Something we need to hear? 🤗🤗
                         </h2>
                         <p className="text-center bg-white p-3 border-2 border-dashed border-pink-300 rounded-lg">
                              And at the end of the nothing matters to me
                              anymore,yes the doors of my heart are still
                              closed....for you to never escape,for you to stay
                              forever, maybe it's okay not to have everything
                              figured out but I we know it well .. we,
                              together,can figure out everything and come to a
                              conclusion where there is only willingness to stay
                              and love like no has ever done before , aur haan
                              mera to saara time aapka hai..CAN YOU SEE THE
                              COLOURS NOW????
                         </p>
                    </div>
               </div>
          </section>
     );
}

export default Slides;
