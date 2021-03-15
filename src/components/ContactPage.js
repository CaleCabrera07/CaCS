const ContactPage = () => {
    return (
        <section className='about-section'>
            <div className='container'>
                <div className='accordion'>
                    <div className='accordion-item' id='question1'>
                        <a href='#question1' className='accordion-link green'>
                            Contact
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer'>
                            <p>
                                You can contact me through Instagram , Twitter
                                or my Youtube Channel. <br />
                                Go to Community Section!
                            </p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question2'>
                        <a href='#question2' className='accordion-link green'>
                            Profesionnal Business
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer'>
                            <p>
                                For professional businnes contact me at
                                calesecond@gmail.com .
                            </p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question3'>
                        <a href='#question3' className='accordion-link green'>
                            Sponsorships
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer'>
                            <p>I currently have no sponsors :(</p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question4'>
                        <a href='#question4' className='accordion-link green'>
                            Community
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer'>
                            <p>
                                Welcome to our community! we're available on
                                Youtube, Instagram, Twitter and Tik Tok.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
