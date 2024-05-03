// import { useAppSelector } from '../../../store/hooks';
// import CreateProfile from '../../forms/createProfile';


import EatingDisorderTest from "../../forms/mhe/Eating-disorder-test"



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
        <EatingDisorderTest/>
      </div>

    </div>
  )
}

export default OnBoardingForm