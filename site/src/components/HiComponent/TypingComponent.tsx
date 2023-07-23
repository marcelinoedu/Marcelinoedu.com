import { Cursor, useTypewriter } from "react-simple-typewriter";

interface TypingComponentProps{
  textLanguage: boolean;
}
function TypingComponent({textLanguage}:TypingComponentProps) {
  const [englishText] = useTypewriter({
    words: ["A programmer", 
    "An enthusiast for systems", 
    "CS student","Passionate by eletro-music"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  const [portugueaseText] = useTypewriter({
    words: ["Sou programador", 
    "Um entusiasta por sistemas", 
    "Estudante de CS","Curto uma boa eletro-music"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div id="typing-component-div">
        <div id="typing-component-title">
            {textLanguage ? "I'm Eduardo" : "Sou Eduardo"}
        </div>
        <span id="iam">{textLanguage? englishText : portugueaseText}<Cursor/></span>
    </div>
  );
}

export default TypingComponent;
