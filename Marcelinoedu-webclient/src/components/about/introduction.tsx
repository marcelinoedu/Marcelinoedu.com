import Photo from '../../assets/img.png'
import '../../assets/style/about/introduction.css'
function Introduction(){
      
    return (
        <div id="introduction-div">
            <div id="top">
                    <div id="left-side-introduction">
                        <img id="photo" src={Photo} alt="Eduardo Marcelino" />
                    </div>
                    <div id="right-side-introduction">
                        <h1 id='intro-title'>Eduardo Marcelino</h1>
                        <span id='intro-p'>Fullstack Developer</span>
                    </div>
            </div>
            <div id="middle">
                <h2>About</h2>
                <p id='english'> I am always looking for opportunities to expand my knowledge and skills, I also like to stay up to date on technology trends and I also enjoy learning about business models. I see teamwork as the most efficient way to work. During my time at CERC, I worked alone for a long time, but when i started working with a high performing team, it made me realize how great efficiency really is. Not only that, developing promising colleagues and learning from them motivates me even more.</p>
            </div>
            
        </div>
    )
}

export default Introduction