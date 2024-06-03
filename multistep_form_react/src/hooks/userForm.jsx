import { useState } from "react";

export function userForm(steps) {
    const [currentStep, setCurrenStep] = useState(0)

    return {
        currentStep,
        currentComponents: steps[currentStep],
    }
}
