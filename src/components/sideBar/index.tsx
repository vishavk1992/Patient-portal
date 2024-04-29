import Logo from '/static/img/main-logo.svg';
import Progressbar from '../ProgressBar';
import MobileMenuImg from '/static/img/menu-btn.svg';
import { useState } from 'react';
import crossIcon from '/static/img/cross-icon.svg';
import { Link } from 'react-router-dom';
import { mainFormsData } from '../../data/formData';

const Sidebar = () => {

  const [progress] = useState(22);

  return (
    <div>
      <div className='tab-view-header bg-white height-100 d-none p-3'>

        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex align-items-center w-100'>
            <img src={Logo} className="mob-img" alt='logo' />
            <div className='mx-3 w-100'>
              <Progressbar
                bgColor={progress > 30 ? '#00D870' : '#7f54ee'}
                completed={progress}

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
                <p>~ min. est. to complete</p>
              </div>

              <ul>
                {mainFormsData.map((form) => {
                  return (
                    <p key={form.id}>
                      <div>
                        <p>
                          {form.title}
                        </p>
                      </div>

                      <ul>
                        {form.subForms?.map((subForm) => {
                          return (
                            <li>{subForm.title}</li>
                          )
                        })}
                      </ul>
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