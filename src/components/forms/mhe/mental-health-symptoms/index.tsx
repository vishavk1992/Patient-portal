import React, { useState } from 'react'
import Back from '/static/img/back-img.svg';
import { Helmet } from 'react-helmet';
import { useAppDispatch } from '../../../../store/hooks';
import { setSubformStage } from '../../../../store/reducers/formReducer';

const MentalHealthSymptoms = () => {
    const dispatch  = useAppDispatch();
    const [currentStep, setCurrentStep] = useState(1);

    const handleBack= ()=>{
         dispatch(setSubformStage({Mhe: 1}));
    }

    const handleNextButton = ()=>{
        if(currentStep<3){
            setCurrentStep(currentStep+1)
        }
        else{
            dispatch(setSubformStage({Mhe:3}))
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Mental Health Symptoms</title>
            </Helmet>
            <div className='title-container'>
                <div className='px-mob-20'>
                    <div className='text-center cursor-pointer pt-56'>
                        <img
                            src={Back}
                            className='mb-8'
                            onClick={() => {
                                currentStep > 1 ? setCurrentStep(currentStep - 1) : handleBack();
                            }}
                        />
                    </div>
                    <h2 className='main-h text-center mb-32'>
                        Mental health symptoms
                        {/* <img src={CircleQuestion} /> */}
                    </h2>
                    <div className='slider-btns mb-4'>
                        {
                            [1, 2, 3].map((step, index) => (
                                <div key={index} className={`circle ${step === currentStep ? "active" : ""} `}> </div>
                            ))
                        }
                    </div>
                    <p className='text-center mb-32'>
                        Please select the symptoms that match your current situation.
                    </p>
                </div>
            </div>
            <div className='card-main w-780 mx-auto'>
                {currentStep === 1 ? (

                    <div id='step1'>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Depressive Mood</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox1' />
                                <label className='form-check-label' htmlFor='checkbox1'>
                                    Feeling down, sad, depressed, hopeless
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox2' checked />
                                <label className='form-check-label' htmlFor='checkbox2'>
                                    Trouble having pleasure in my life
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox3' checked />
                                <label className='form-check-label' htmlFor='checkbox3'>
                                    Trouble with motivation to do things
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Substance Abuse</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox4' />
                                <label className='form-check-label' htmlFor='checkbox4'>
                                    Use recreational drugs problematically
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox5' />
                                <label className='form-check-label' htmlFor='checkbox5'>
                                    Get into trouble because of my drug use
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Alcohol Abuse</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox6' />
                                <label className='form-check-label' htmlFor='checkbox6'>
                                    Drink excessively daily or binge drinking
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox7' />
                                <label className='form-check-label' htmlFor='checkbox7'>
                                    Go through alcohol withdrawal
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox8' checked />
                                <label className='form-check-label' htmlFor='checkbox8'>
                                    Brownouts or blackouts
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox9' checked />
                                <label className='form-check-label' htmlFor='checkbox9'>
                                    Get belligerent when I'm drunk
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Interpersonal Deficits </p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox10' />
                                <label className='form-check-label' htmlFor='checkbox10'>
                                    Feel chronically lonely or empty
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox11' />
                                <label className='form-check-label' htmlFor='checkbox11'>
                                    Trouble keeping friends
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox12' />
                                <label className='form-check-label' htmlFor='checkbox12'>
                                    Relationships blow up on me
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox13' />
                                <label className='form-check-label' htmlFor='checkbox13'>
                                    Trouble making friends
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Emotion Dysregulatione</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox14' />
                                <label className='form-check-label' htmlFor='checkbox14'>
                                    Trouble controlling my emotions on a day-to-day basis
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox15' />
                                <label className='form-check-label' htmlFor='checkbox15'>
                                    Flying off the handle easily
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox16' />
                                <label className='form-check-label' htmlFor='checkbox16'>
                                    Trouble self-soothing
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Attention, Focus, and Concentration</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox17' />
                                <label className='form-check-label' htmlFor='checkbox17'>
                                    Trouble with focus, concentration, or paying attention
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox18' />
                                <label className='form-check-label' htmlFor='checkbox18'>
                                    Get distracted easily
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox19' />
                                <label className='form-check-label' htmlFor='checkbox19'>
                                    Chronic problems with procrastination
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox20' />
                                <label className='form-check-label' htmlFor='checkbox20'>
                                    Chronic problems doing things that are not interesting to me
                                </label>
                            </div>
                        </div>
                    </div>
                ) : currentStep === 2 ? (
                    <div id='step2'>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Reality Testing (Psychosis)</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox21' />
                                <label className='form-check-label' htmlFor='checkbox21'>
                                    Hearing voices
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox22' />
                                <label className='form-check-label' htmlFor='checkbox22'>
                                    Seeing things that other people don't see
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox23' />
                                <label className='form-check-label' htmlFor='checkbox23'>
                                    Feeling paranoid, watched, monitored, or tracked
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox24' />
                                <label className='form-check-label' htmlFor='checkbox24'>
                                    Believe things that other people don't believe to be true
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Disordered Eating</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox25' />
                                <label className='form-check-label' htmlFor='checkbox25'>
                                    I restrict my calories in an unhealthy way
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox26' />
                                <label className='form-check-label' htmlFor='checkbox26'>
                                    I binge eat
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox27' />
                                <label className='form-check-label' htmlFor='checkbox27'>
                                    I purge by vomiting or using laxatives
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox28' />
                                <label className='form-check-label' htmlFor='checkbox28'>
                                    I overexercise to lose weight
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Post-Traumatic Symptoms</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox29' />
                                <label className='form-check-label' htmlFor='checkbox29'>
                                    Hypervigilance. Feeling unsafe in the world
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox30' />
                                <label className='form-check-label' htmlFor='checkbox30'>
                                    Avoid situations that remind me of trauma
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox31' />
                                <label className='form-check-label' htmlFor='checkbox31'>
                                    Intrusive memories of trauma
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox32' />
                                <label className='form-check-label' htmlFor='checkbox32'>
                                    Frequent nightmares
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox33' />
                                <label className='form-check-label' htmlFor='checkbox33'>
                                    Flashback experiences of traumatic event(s)
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Mental Anxiety</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox34' />
                                <label className='form-check-label' htmlFor='checkbox34'>
                                    Excessive worrying
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox35' />
                                <label className='form-check-label' htmlFor='checkbox35'>
                                    Obsessively thinking about things
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox36' />
                                <label className='form-check-label' htmlFor='checkbox36'>
                                    Replaying things in my mind
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox38' />
                                <label className='form-check-label' htmlFor='checkbox38'>
                                    Feel scared, afraid, or fearful
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox39' />
                                <label className='form-check-label' htmlFor='checkbox39'>
                                    Feeling nervous all the time
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox40' />
                                <label className='form-check-label' htmlFor='checkbox40'>
                                    Feeling nervous in social situations
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox41' />
                                <label className='form-check-label' htmlFor='checkbox41'>
                                    Feeling nervous with presentation or public speaking
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Physical Anxiety</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox42' />
                                <label className='form-check-label' htmlFor='checkbox42'>
                                    Racing heartbeat
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox43' />
                                <label className='form-check-label' htmlFor='checkbox43'>
                                    Shaking or weakness in limbs
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox44' />
                                <label className='form-check-label' htmlFor='checkbox44'>
                                    Sweating
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox45' />
                                <label className='form-check-label' htmlFor='checkbox45'>
                                    Panic attacks
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox46' />
                                <label className='form-check-label' htmlFor='checkbox46'>
                                    Shortness of breath
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox47' />
                                <label className='form-check-label' htmlFor='checkbox47'>
                                    Tightness in chest
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox48' />
                                <label className='form-check-label' htmlFor='checkbox48'>
                                    Knot in stomach
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Suicidal Ideations and Behaviors</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox49' />
                                <label className='form-check-label' htmlFor='checkbox49'>
                                    Thoughts of suicide
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox50' />
                                <label className='form-check-label' htmlFor='checkbox50'>
                                    Thoughts of death
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div id='step3'>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Mood Stability</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox51' />
                                <label className='form-check-label' htmlFor='checkbox51'>
                                    Mood swings
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox52' />
                                <label className='form-check-label' htmlFor='checkbox52'>
                                    Unpredictable moods
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox53' />
                                <label className='form-check-label' htmlFor='checkbox53'>
                                    Have periods of recurrent depression and abnormally elevated moods
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Abnormally Elevated Mood</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox54' />
                                <label className='form-check-label' htmlFor='checkbox54'>
                                    Feeling too amped up or revved up
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox55' />
                                <label className='form-check-label' htmlFor='checkbox55'>
                                    Feeling hyper-irritable and aggressive
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox5' />
                                <label className='form-check-label' htmlFor='checkbox5'>
                                    Feeling euphoric or elated in my mood
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox56' />
                                <label className='form-check-label' htmlFor='checkbox56'>
                                    Feeling overly confident
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox57' />
                                <label className='form-check-label' htmlFor='checkbox57'>
                                    Feel overly energized
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Grief and Loss</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox58' />
                                <label className='form-check-label' htmlFor='checkbox58'>
                                    Grieving over the death of loved one
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox59' />
                                <label className='form-check-label' htmlFor='checkbox59'>
                                    Feelings of loss around a relationship breakup
                                </label>
                            </div>
                        </div>
                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Obsessions and Compulsions</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox60' />
                                <label className='form-check-label' htmlFor='checkbox6'>
                                    Compulsive behaviors to neutralize anxiety (e.g. checking, excessive handwashing,
                                    praying, etc.)
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox60' />
                                <label className='form-check-label' htmlFor='checkbox7'>
                                    Intrusive thoughts that cause anxiety
                                </label>
                            </div>
                        </div>

                        <div className='border-bottom mb-4'>
                            <p className='fw-bold'>Abnormal Body Image</p>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox61' />
                                <label className='form-check-label' htmlFor='checkbox61'>
                                    Frequently think about how my body looks
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox62' />
                                <label className='form-check-label' htmlFor='checkbox62'>
                                    Frequenlty think that I am overweight
                                </label>
                            </div>
                            <div className='form-check check-btn content-b-space'>
                                <input className='form-check-input' type='checkbox' id='checkbox63' />
                                <label className='form-check-label' htmlFor='checkbox63'>
                                    Frequently think that there is something wrong with the way my body looks
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                <div className='text-center'>
                    <button
                        className='btn btn-primary form-btn btn-w-fit btn-with-border w-100'
                        onClick={handleNextButton}
                    >
                        Next
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MentalHealthSymptoms