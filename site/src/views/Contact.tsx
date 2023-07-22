import React, { useEffect } from 'react';

interface ContactProps{
    title: string;
}

function Contact( {title}: ContactProps){
    useEffect(() => {
        document.title = title;
      }, [title]);

    return(
        <div className="contact">
        </div>
    );
}

export default Contact;