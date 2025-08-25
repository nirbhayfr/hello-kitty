import { FaHeart } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";

const data = [
     {
          icon: <SlEnvolope className="size-12" />,
          heading: "A small message for you 💌",
          text: "Click here to read my hearty thoughts!",
     },
     {
          icon: <FaHeart className="size-12" />,
          heading: "Here is a picture!",
          text: "Click on the heart above!!",
     },
];

function HomePopupMain({ setLetterOpen, setPictureOpen }) {
     return (
          <div className="space-y-8">
               <div className="bg-pink-400 rounded-lg">
                    <div
                         className="border-2 border-stone-800 rounded-lg p-8 flex flex-col items-center gap-4 cursor-pointer inset-shadow-sm shadow-2xl bg-white/90 -translate-2"
                         onClick={() => setLetterOpen(true)}
                    >
                         <div className="size-20 bg-pink-300 rounded-full text-pink-600 flex justify-center items-center">
                              {data[0].icon}
                         </div>
                         <h2 className="text-2xl md:text-4xl text-pink-500">
                              {data[0].heading}
                         </h2>
                         <p>{data[0].text}</p>
                    </div>
               </div>

               <div className="bg-pink-400 rounded-lg">
                    <div className="border-2 border-stone-800 rounded-lg p-8 flex flex-col items-center gap-4 cursor-pointer inset-shadow-sm shadow-2xl  bg-white/90 -translate-2">
                         <div
                              className="size-20 bg-pink-300 rounded-full text-pink-600 flex justify-center items-center"
                              onClick={() => setPictureOpen(true)}
                         >
                              {data[1].icon}
                         </div>
                         <h2 className="text-2xl md:text-4xl text-pink-500">
                              {data[1].heading}
                         </h2>
                         <p>{data[1].text}</p>
                    </div>
               </div>
          </div>
     );
}

export default HomePopupMain;
