import Logo from '/static/img/main-logo.svg';
import Progressbar from '../ProgressBar';
import MobileMenuImg from '/static/img/menu-btn.svg';
import Play from '/static/img/play.svg';
import Check from '/static/img/check.svg';
import { useEffect, useState } from 'react';
import crossIcon from '/static/img/cross-icon.svg';
import { Link } from 'react-router-dom';
import { mainFormsData } from '../../data/formData';
import { useAppDispatch } from '../../store/hooks';
import { useAppSelector } from '../../store/hooks';
import { setFormStage } from '../../store/reducers/formReducer';
import { setSubformStage } from '../../store/reducers/formReducer';
import { uppercaseFirstCharacter } from '../../utilities';



const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { formStage, subFormStage } = useAppSelector((state) => state.form);

  const [progress, setProgress] = useState(22);
  const [estimatedTime, setEstimatedTime] = useState(22);
  const [menuClass, setMenuClass] = useState('');

  const handleMenuClass = (scrollTop: any) => {
    if (menuClass !== 'shadow-visible' && scrollTop >= 62) {
      setMenuClass('shadow-visible');
    } else if (menuClass === 'shadow-visible' && scrollTop < 62) {
      setMenuClass('');
    }
  };

  useEffect(() => {
    const contentWrapper = document.getElementById('content-wrapper');
    if (contentWrapper) {
      contentWrapper.addEventListener('scroll', () => {
        handleMenuClass(contentWrapper.scrollTop);
      });
    }
  }, [formStage, subFormStage, menuClass]);


  useEffect(() => {
    if (formStage === 1) {
      setProgress(22);
      setEstimatedTime(22);
    } else if (formStage === 2) {
      setProgress(80);
      setEstimatedTime(4);
    }
    //  else if (formStage === 3) {
    //   setProgress(100);
    //   setEstimatedTime(4);
    // } 
    else {
      setProgress(100);
    }
  }, [formStage]);

  const handleFormStage = (storeName: string, subFormPosition: number) => {
    if (window.innerWidth <= 1024) {
      const closeOffcanvasBtn: any = document.getElementById('closeoffcanvas');
      closeOffcanvasBtn.click();
    }
    dispatch(setSubformStage({ [storeName]: subFormPosition }));
  };


  const handleForms = ((formPosition: number, subFormStage: any) => {
    if (formStage >= formPosition) {
      dispatch(setFormStage(formPosition));
      if (formPosition !== formStage) {
        dispatch(setSubformStage({ [subFormStage.subForm]: subFormStage.subFormLength }))
      }
    }
  })


  return (
    <div>
      <div className={`tab-view-header bg-white height-100 d-none p-3 ${menuClass}`}>

        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex align-items-center w-100'>
            <img src={Logo} className="mob-img" alt='logo' />
            <div className='mx-3 w-100'>
              <Progressbar
                bgColor={progress > 30 ? '#00D870' : '#7f54ee'}
                completed={progress}
                estimatedTime={estimatedTime}

              />
            </div>
          </div>
          <button className="bg-transparent menu border-0 p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">

            <img src={MobileMenuImg} alt="mob-menu" />
          </button>

        </div>
      </div>
      <div id='sidebar'>
        <div className='offcanvas offcanvas-end bg-white border-0'
          tabIndex={-1}
          id='offcanvasRight'
          aria-labelledby='offcanvasRightLabel'>
          <div className='panel-space bg-white'>
            <div className='d-flex align-items-center mb-mob-28 position-relative mt-0 menu-spacing'>
              <div className=" align-items-center d-none small-scr-visible">
                <img src={Logo} className="mob-img" alt='logo' />
                <div className='mx-3 w-100'>
                  <Progressbar
                    bgColor={progress > 30 ? '#00D870' : '#7f54ee'}
                    completed={progress}
                    estimatedTime={estimatedTime}
                  />
                </div>
              </div>
              <div
                id='closeoffcanvas'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasRight'
                aria-controls='offcanvasRight'
              >
                <img className='cross-img d-none cursor-pointer' src={crossIcon} />
              </div>

            </div>

            <div className='offcanvas-body p-0 pt-52'>
              <div className='d-desktop-block d-none'>
                <Link to='/'>
                  <img className='mb-48' src={Logo} />
                </Link>
                <button
                  className='btn-close text-reset'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'
                >
                </button>
                <p className='mb-0'>Patient Onboarding</p>
                <div className='py-16 pb-2'>
                  <div className='bg-main progress'>
                    <Progressbar
                      bgColor={progress > 30 ? '#00D870' : '#7f54ee'}
                      completed={progress}
                    />
                  </div>
                </div>
                <p className={`${progress === 100 ? 'progress-success' : 'light-theme-text'} mb-48`}>
                  {progress === 100 ? 'DONE!' : `~${estimatedTime} min. est. to complete `}
                </p>
              </div>

              <ul>
                {mainFormsData.map((form) => {
                  return (
                    <p
                      className={`${form.formPosition !== formStage ? 'mb-48' : 'mb-0'}`}
                      key={form.id}>
                      <div className='d-flex align-items-center'>
                        {formStage >= form.formPosition && <img className='pe-2' src={Check} />}
                        <p
                          className={`text-uppercase mb-0 cursor-pointer title-letter-space ${formStage === form.formPosition
                            ? 'light-theme-text'
                            : formStage < form.formPosition
                              ? 'light-text'
                              : ''
                            }`}

                          onClick={() => {
                            if (form.formPosition < 4) {
                              handleForms(form.formPosition, {
                                subForm: form.storeName,
                                subFormLength: form.subForms?.length,
                              })
                            }
                          }}
                        >
                          {form.title}
                        </p>
                      </div>
                      {formStage === form.formPosition && (
                        <ul>
                          {form.subForms?.map((subForm) => {
                            return (
                              <li key={subForm.id}
                              className='cursor-pointer'
                              onClick={() =>
                                handleFormStage(form.storeName, subForm.subFormPosition)
                              }
                              >
                                {subFormStage[form.storeName] === subForm.subFormPosition && (
                                <img className='pe-2' src={Play} />
                              )}
                          
                                <span>{uppercaseFirstCharacter(subForm.title)}</span>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </p>

                  )
                })}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;