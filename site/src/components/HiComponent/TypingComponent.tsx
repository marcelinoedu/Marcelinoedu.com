import { Cursor, useTypewriter } from "react-simple-typewriter";
function TypingComponent() {
  const [text] = useTypewriter({
    words: ["A programmer", 
    "An enthusiast for systems", 
    "CS student","Passionate by eletro-music"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });

  return (
    <div id="typing-component-div">
        <div id="typing-component-title">
            I'm Eduardo,
        </div>
        <span id="iam">{text}<Cursor/></span>
    </div>
  );
}

export default TypingComponent;
