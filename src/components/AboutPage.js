import '../styles/AboutPage.css';

const AboutPage = () => {
    return (
        <section className='about-section'>
            <div className='container'>
                <div className='accordion'>
                    <div className='accordion-item' id='question1'>
                        <a href='#question1' className='accordion-link pink'>
                            Who I am
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer-pink'>
                            <p>
                                Hi, I'm Cale! I'm a 21-year-old college student
                                and kinda obsessed gamer.
                            </p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question2'>
                        <a href='#question2' className='accordion-link pink'>
                            Where do I live?
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer-pink'>
                            <p>
                                I'm currently living in Toronto, CA. Although
                                I'm originally from Venezuela.
                            </p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question3'>
                        <a href='#question3' className='accordion-link pink'>
                            What games do I play?
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer-pink'>
                            <p>
                                I play League of Legends in LAN regularly and NA
                                / EUW from time to time. <br />I also play Call
                                of Duty (Warzone) with friends almost every
                                night.
                            </p>
                        </div>
                    </div>

                    <div className='accordion-item' id='question4'>
                        <a href='#question4' className='accordion-link pink'>
                            When I Started to play?
                            <i class='fas fa-plus'></i>
                            <i class='fas fa-minus'></i>
                        </a>
                        <div className='answer-pink'>
                            <p>
                                I started when a I was a 5-year-old child. My
                                older brother introduces me to this world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
