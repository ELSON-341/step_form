import { useState } from "react";
export function userForm(steps) {
    const [currentStep, setCurrenStep] = useState(0)

    function chagesStep(i, e) {
        if(e) e.preventDefault()
        
        if(i < 0 || i >= steps.length) return

        setCurrenStep(i)
    }



    return {
        currentStep,
        currentComponents: steps[currentStep],
        chagesStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}