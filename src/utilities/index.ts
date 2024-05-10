export const getContentWrapperClass = (formStage: number, subFormStage: number) => {
    let className = '';
    if (
      formStage === 3 ||
      formStage === 6 ||
      (formStage === 2 &&
        (subFormStage === 10 ||
          subFormStage === 9 ||
          subFormStage === 7 ||
          subFormStage === 3 ||
          subFormStage === 13 ||
          subFormStage === 12 ||
          subFormStage === 11 ||
          subFormStage === 8))
    ) {
      className = 'depression-test-page';
    } else if (formStage === 2 && (subFormStage === 5 || subFormStage === 4)) {
      className = 'mental-health-page';
    } else if (formStage === 2 && subFormStage === 6) {
      className = 'mood-issues-page';
    }
    if (formStage === 2 && (subFormStage === 9 || subFormStage === 2)) {
      className += 'alcohol-test';
    }
    return className;
  };