import ADHDTest from "./ADHDTest";
import AlcoholTest from "./alcohol-Test";
import AnxietyTest from "./anxiety-test";
import ChiefComplaint from "./chief-compaint";
import DepressionTest from "./depression-test";
import DisabilityLevelTest from "./disability-level-test";
import EatingDisorderTest from "./Eating-disorder-test";
import ManiaTest from "./Mania-test";
import MentalHealthSymptoms from "./mental-health-symptoms";
import MoodIssuesTest from "./mood-issues-test";
import PersonalityIssuesTest from "./personality-issues-test";
import PTSdTest from "./Ptsd-test";
import SucideTest from "./sucide-test";
import { useAppSelector } from "../../../store/hooks";


const Mhe = () => {

    const subformStage = useAppSelector((state) => state.form.subFormStage);

    return (
        <div>
            {(() => {
                switch (subformStage?.Mhe) {
                    case 1:
                        return < ChiefComplaint />
                    case 2:
                        return <MentalHealthSymptoms />
                    case 3:
                        return <DepressionTest />
                    case 4:
                        return <SucideTest />
                    case 5:
                        return <ManiaTest />
                    case 6:
                        return <MoodIssuesTest />
                    case 7:
                        return <AnxietyTest />;
                    case 8:
                        return <PTSdTest />;
                    case 9:
                        return <AlcoholTest />;
                    case 10:
                        return <ADHDTest />;
                    case 11:
                        return <PersonalityIssuesTest />;
                    case 12:
                        return <EatingDisorderTest />;
                    case 13:
                        return <DisabilityLevelTest />;
                    default:
                        return null;
                }

            })()}
        </div>
    )
}

export default Mhe;