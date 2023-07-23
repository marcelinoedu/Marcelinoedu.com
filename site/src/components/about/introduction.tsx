import React from 'react';
import Photo from '../../assets/imgs/img.png'
import '../../assets/style/about/introduction.css'
interface IntroductionProps{
    textLanguage:boolean
}
function Introduction({ textLanguage }: IntroductionProps) {
    const introductionText = textLanguage
      ? `With 20 years under my belt, I hail from Maceió, Alagoas, but now call São Paulo home. I'm on a mission to crack the code of complex applications(I gave this to me), seamlessly to a honor. Armed with an analytical and professional approach, I never shy away from challenges, in fact, I embrace the unknown as an opportunity to level up my skills.
  No fancy degree here, I'm a self-taught programmer! Who needs specialization when you can learn it all?(I do, I am willing with cs).
  Constantly upgrading my knowledge, I thrive on evolving with the dynamic tech market.
  My ultimate quest? Heaven, besides the black belt. With the tenacity of a code warrior (call me a Cybertemplary ... Deus Vult!), I fearlessly embrace audacious projects, conquering them one line of code at a time.
  You can find me crafting my digital mastery on the links below!`
      : `Com duas décadas nas costas, há uns 20 anos nasci em Maceió, Alagoas, hoje passo minhas noites em São Paulo;
  Estou em uma missão para escrever boas soluções através de códigos (eu mesmo me desafiei, afinal, mente vazia é casa do cão). Munido de uma abordagem analítica, nunca fujo dos desafios, na verdade, abraço problemas desconhecidos como uma oportunidade para aprimorar minhas habilidades.
  Aqui não tem diploma chique, sou um programador autodidata! Quem precisa de especialização quando se pode aprender de tudo? (Eu, estou disposto a ter um em Ciência da Computação). Atualmente venho atualizando meu conhecimento, prosperando com a evolução dinâmica do mercado de tecnologia através de cursos e mão no teclado.
  Minha busca suprema? O Céu, fora isso quero a faixa preta no Jiu. 
  Com a tenacidade de um "code warrior" (me chame de Cibertemplário... Deus Vult!), abraço destemidamente projetos audaciosos, conquistando-os uma linha de código de cada vez.
  Você pode me encontrar aprimorando minha maestria digital nos links abaixo!`;
  
    return (
      <div id="introduction-div">
        <div id="top">
          <div id="left-side-introduction">
            <img id="photo" src={Photo} alt="Eduardo Marcelino" />
          </div>
          <div id="right-side-introduction">
            <h1 id='intro-title'>Eduardo Marcelino</h1>
            <span id='intro-p'>{textLanguage ? `Fullstack Developer` : `Desenvolvedor Fullstack`}</span>
          </div>
        </div>
        <div id="middle">
          <h2>{textLanguage ? `About` : `Sobre`}</h2>
          <p style={{ fontSize: "15px" }} id='english'>
            {introductionText.split('\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    )
  }
  
  export default Introduction
  