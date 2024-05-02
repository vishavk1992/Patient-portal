import React from 'react'
import { Helmet } from 'react-helmet';
import Back from '/static/img/back-img.svg';
import CircleQuestion from '/static/img/circle-question.svg';


const ADHDTest = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>ADHD Test</title>
            </Helmet>
            <div className='title-container mx-auto w-780'>
                <div className='px-mob-20'>
                    <div className='text-center cursor-pointer pt-56'>
                        <img src={Back} className='mb-8' />
                    </div>
                    <h2 className='main-h text-center mb-32'>
                        ADHD Test <img src={CircleQuestion} />
                    </h2>
                    <p className='text-center'>Please answer the questions below, rating yourself on each of the criteria shown using
                        the scale on the right side of the page.</p>
                </div>
            </div>
            <div className='card-main mx-auto w-780 test-container' >
                <div className='pb-4 '>
                    <p>How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?</p>
                    <button className='btn btn-primary form-btn btn-with-border btn-active'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>


                <div className='pb-4 '>
                    <p>How often do you have difficulty getting things in order when you have to do a task that requires organization?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>

                <div className='pb-4 opacity-low'>
                    <p>How often do you have problems remembering appointments or obligations?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='pb-4 opacity-low'>
                    <p>When you have a task that requires a lot of thought, how often do you avoid or delay getting started?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>

                <div className='pb-4 opacity-low'>
                    <p>Poor appetite or overeating</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>

                <div className='pb-4 opacity-low'>
                    <p>How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='pb-4 opacity-low'>
                    <p>How often do you feel overly active and compelled to do things, like you were driven by a motor?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='pb-4 opacity-low'>
                    <p>How often do you make careless mistakes when you have to work on a boring or difficult project?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>

                <div className='pb-4 opacity-low'>
                    <p>How often do you have difficulty keeping your attention when you are doing boring or repetitive work?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='border-bottom pb-4 opacity-low'>
                    <p>How often do you misplace or have difficulty finding things at home or at work?</p>
                    <button className='btn btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Never
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn '>
                        Rarely
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Sometimes
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Often
                    </button>
                    <button className='btn-btn-primary form-btn btn-with-border gray-shaded-btn'>
                        Very Often
                    </button>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>How often are you distracted by activity or noise around you?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>
                        How often do you leave your seat in meetings or other situations in which you are
                        expected to remain seated?
                    </p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>

                <div className='border-bottom py-4 opacity-low'>
                    <p>How often do you feel restless or fidgety?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>
                        How often do you have difficulty unwinding and relaxing when you have time to yourself?
                    </p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>How often do you find yourself talking too much when you are in social situations?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>
                        When you’re in a conversation, how often do you find yourself finishing the sentences of
                        the people you are talking to, before they can finish them themselves?
                    </p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>
                        How often do you have difficulty waiting your turn in situations when turn taking is
                        required?
                    </p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='border-bottom py-4 opacity-low'>
                    <p>How often do you interrupt others when they are busy?</p>
                    <div className='d-flex align-items-center'>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Never
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Rarely
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Sometimes
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Often
                        </button>
                        <button className='btn btn-primary form-btn btn-w-fit btn-with-border gray-shaded-btn'>
                            Very Often
                        </button>
                    </div>
                </div>
                <div className='text-center'>
                    <button
                        className='btn btn-primary form-btn  btn-with-border mt-4 opacity-low btn-w-507'
                    >
                       Next
                    </button>
                </div>

            </div>


        </React.Fragment>
    )
}

export default ADHDTest