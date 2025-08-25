import { useState } from "react";
import Letter from "./components/Letter";
import Slides from "./components/Slides";
import LetterMain from "./components/LetterMain";
import PictureMain from "./components/PictureMain";

function App() {
     const [letterOpen, setLetterOpen] = useState(false);
     const [pictureOpen, setPictureOpen] = useState(false);
     return (
          <main className="font-borel relative flex">
               <Letter />
               <Slides
                    setLetterOpen={setLetterOpen}
                    setPictureOpen={setPictureOpen}
               />
               {letterOpen && <LetterMain setLetterOpen={setLetterOpen} />}
               {pictureOpen && <PictureMain setPictureOpen={setPictureOpen} />}
          </main>
     );
}

export default App;
