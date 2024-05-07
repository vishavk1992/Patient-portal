// import { useAppSelector } from '../../../store/hooks';
// import CreateProfile from '../../forms/createProfile';

import MentalHealthSymptoms from "../../forms/mhe/mental-health-symptoms"





const OnBoardingForm = () => {
 
  // const formStage = useAppSelector((state)=>state.form.formStage)


  return (
    <div className="main-wrapper">
      <div className={"w-100 page-scroll"
      }>

        {/* {(() => {
          switch (formStage) {
            case 1:
              return <CreateProfile />
           
           
            default:
              return null;

          }
        })()} */}
        <MentalHealthSymptoms/>
      </div>

    </div>
  )
}

export default OnBoardingForm