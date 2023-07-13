function CobbleWork(){
    const Link = 
    (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
      </svg>
  );


    return(
        <div className="workBodyDiv">
                <div className="work-date">
                04/2023 - Present
                </div>
                <div className="job-description">
                    <a className="job-location" href="https://cobble.com.br/">
                        <span>
                            Cobble - FullStack Developer {Link}
                        </span>
                        
                    </a>
                    <span className="job-experience">
                        <h5>
                            As a software developer at Cobble, I've been working on the main product which I designed the ecoSystem and developed the main features for the web platform and the mobile app;
                            <br/>Cobble is a financial manager app that offers many benefits and tools, from daily expenses and incomes to financial market, allowing users to track all data and providing resources to take the best choices when it comes to raise finances. 
                        </h5>
                    </span>
                    <p className="job-tools">
                    <br />
                    Java · SpringEcosystem · GO · Python · Flask · Apache Kafka · TypeScript · ReactJs · Flutter · CassandraDB · MySQL ·
                    </p>
                </div>
        </div>
    )
}

export default CobbleWork;