import { useAppSelector } from '../../../store/hooks';
import CreateProfile from '../../forms/createProfile';
import Mhe from '../../forms/mhe';
import ThankYou from '../../forms/thank-you';

const OnBoardingForm = () => {

  const formStage = useAppSelector((state) => state.form.formStage)


  return (
    <div className="main-wrapper">
      <div className={"w-100 page-scroll"
      }>

        {(() => {
          switch (formStage) {
            case 1:
              return <CreateProfile />
            case 2:
              return <Mhe />
            case 3:
              return <ThankYou />


            default:
              return null;

          }
        })()}

      </div>

    </div>
  )
}

export default OnBoardingForm