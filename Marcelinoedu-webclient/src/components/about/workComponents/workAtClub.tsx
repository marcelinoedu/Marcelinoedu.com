function ClubWork(){
    const arrowUp = 
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
      </svg>
  );


    return(
        <div className="workBodyDiv">
                <div className="work-date">
                06/2021 - Present
                </div>
                <div className="job-description">
                    <a className="job-location" href="https://clubecasadesign.com.br/">
                        <span>
                            Club&Casa Design - FullStack Developer {arrowUp}
                        </span>
                        
                    </a>
                    <span className="job-experience">
                        <h5>
                            As a software developer at Club&Casa Design, I've been working on the main product team developing and maintaining the web platform that offers many benefits and tools for companies in the architecture market. 
                             My focus is on building and maintaining new resilient tools and features to integrate into Club&Casa Design's products.
                        </h5>
                    </span>
                    <p className="job-tools">
                    PHP · Laravel · JavaScript · Vue.js · Flutter · Dart · MySQL
                    </p>
                </div>
        </div>
    )
}

export default ClubWork;