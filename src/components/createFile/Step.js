import React from "react";
import { Step } from "semantic-ui-react";

const createFileSteps = ({ activeStep }) => (
    <div>
        <Step.Group attached="top">
            <Step active={activeStep === 1} completed={activeStep > 1}>
                <Step.Content>
                    <Step.Title>Basic Info</Step.Title>
                </Step.Content>
            </Step>

            <Step
                active={activeStep === 2}
                completed={activeStep > 2}
                disabled={activeStep < 2}
            >
                <Step.Content>
                    <Step.Title>Properties</Step.Title>
                    <Step.Description>
                        Enter the required Properties
                    </Step.Description>
                </Step.Content>
            </Step>

            <Step
                active={activeStep === 3}
                completed={activeStep > 3}
                disabled={activeStep < 3}
            >
                <Step.Content>
                    <Step.Title>Confirm and print code</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    </div>
);

export default createFileSteps;
