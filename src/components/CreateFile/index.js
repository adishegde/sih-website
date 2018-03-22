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
            priority: "low",
            properties: [""],
            customData: "",
            error: false
        };

        this.onContinueBasicInfo = this.onContinueBasicInfo.bind(this);
        this.onContinueProperties = this.onContinueProperties.bind(this);
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
            customData,
            error
        } = this.state;
        let { isCreating } = this.props;

        switch (currentWindow) {
            case 1:
                stepWindow = (
                    <BasicInfo
                        nameValue={name}
                        error={error}
                        priorityValue={priority}
                        onInputChange={this.onBasicInfoChange}
                        onContinue={this.onContinueBasicInfo}
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
                        onContinue={this.onContinueProperties}
                        customDataValue={customData}
                        onCustomDataChange={this.onCustomDataChange}
                    />
                );
                break;
            case 3:
                stepWindow = (
                    <Confirmation
                        onCreateFile={this.onCreateFile}
                        isCreating={isCreating}
                        fileData={{ name, priority, properties, customData }}
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

    onContinueProperties(event) {
        event.preventDefault();

        this.setState(({ properties }) => ({
            currentWindow: 3,
            properties: properties.filter(item => item)
        }));
    }

    onContinueBasicInfo(event) {
        event.preventDefault();

        // If name is empty then show error
        const { name } = this.state;
        if (!name)
            this.setState({
                error: true
            });
        else
            this.setState({
                currentWindow: 2,
                error: false
            });
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
