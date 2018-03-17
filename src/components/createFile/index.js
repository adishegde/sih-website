import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import BasicInfo from "./BasicInfo";
import Confirmation from "./Confirmation";
import Properties from "./Properties";
import Step from "./Step";

export default class CreateFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentWindow: 1,
            name: "",
            priority: 1,
            properties: [""],
            customData: ""
        };

        this.onContinueStep = this.onContinueStep.bind(this);
        this.onBasicInfoChange = this.onBasicInfoChange.bind(this);
        this.onPropertyChange = this.onPropertyChange.bind(this);
        this.onPropertyAdd = this.onPropertyAdd.bind(this);
        this.onPropertyDelete = this.onPropertyDelete.bind(this);
        this.onCustomDataChange = this.onCustomDataChange.bind(this);
        this.onCreateFile = this.onCreateFile.bind(this);
    }

    render() {
        let stepWindow;
        let {
            currentWindow,
            name,
            priority,
            properties,
            customData
        } = this.state;
        let { fileId } = this.props;

        switch (currentWindow) {
            case 1:
                stepWindow = (
                    <BasicInfo
                        nameValue={name}
                        priorityValue={priority}
                        onInputChange={this.onBasicInfoChange}
                        onContinue={this.onContinueStep}
                    />
                );
                break;
            case 2:
                stepWindow = (
                    <Properties
                        onPropertyChange={this.onPropertyChange}
                        onPropertyAdd={this.onPropertyAdd}
                        onPropertyDelete={this.onPropertyDelete}
                        properties={properties}
                        onContinue={this.onContinueStep}
                        customDataValue={customData}
                        onCustomDataChange={this.onCustomDataChange}
                    />
                );
                break;
            case 3:
                stepWindow = (
                    <Confirmation
                        fileId={fileId}
                        onCreateFile={this.onCreateFile}
                    />
                );
                break;
            default:
                break;
        }

        return (
            <div className="create-file-component">
                <Step activeStep={currentWindow} />
                <div>
                    <Segment basic>{stepWindow}</Segment>
                </div>
            </div>
        );
    }

    onContinueStep(event) {
        event.preventDefault();

        this.setState(({ currentWindow }) => ({
            currentWindow: currentWindow + 1
        }));
    }

    onBasicInfoChange(event, { name, value }) {
        this.setState({
            [name]: value
        });
    }

    onPropertyChange(modified, value) {
        this.setState(({ properties }) => ({
            properties: properties.map(
                (item, index) => (index === modified ? value : item)
            )
        }));
    }

    onPropertyAdd() {
        this.setState(({ properties }) => ({
            properties: [...properties, ""]
        }));
    }

    onPropertyDelete(deleted) {
        this.setState(({ properties }) => ({
            properties: properties.filter((item, index) => index !== deleted)
        }));
    }

    onCustomDataChange(event, { value }) {
        this.setState({
            customData: value
        });
    }

    onCreateFile() {
        const { onCreateFile: requestCreateFile } = this.props;
        const { name, priority, properties, customData } = this.state;

        requestCreateFile({ name, priority, properties, customData });
    }
}
