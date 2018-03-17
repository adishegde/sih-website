import React, { Component } from "react";
import { Container, Button, Confirm } from "semantic-ui-react";
import { QRCode } from "react-qr-svg";

class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
    }

    show = () => this.setState({ open: true });

    handleCancel = () => this.setState({ open: false });

    handleConfirm = () => {
        this.setState({ open: false });

        const { onCreateFile } = this.props;
        onCreateFile();
    };

    render() {
        const { fileId } = this.props;

        if (!fileId) {
            return (
                <div align="middle">
                    <Button
                        onClick={this.show}
                        icon="send"
                        content="Create File"
                        labelPosition="left"
                        primary
                    />
                    <Confirm
                        style={{ marginLeft: "60vh", marginTop: "35vh" }}
                        open={this.state.open}
                        content="Are You sure?"
                        onCancel={this.handleCancel}
                        onConfirm={this.handleConfirm}
                        icon="checkmark"
                    />
                </div>
            );
        }

        return (
            <div>
                <div align="middle">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 256 }}
                        value={fileId.toString()}
                    />
                </div>
                <Container text>
                    <br />
                    <p>
                        This is the QRCode generated for your file. Attach the
                        QR code to your file so that its position can be tracked
                        and updated. You can view the QRCode again in the
                        details of the file just created.
                    </p>
                    <br />
                </Container>
                <div align="middle">
                    <Button
                        type="button"
                        icon="print"
                        content="Print QRCode"
                        labelPosition="left"
                        primary
                        onClick={event => {
                            event.preventDefault();
                            window.print();
                            return false;
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Confirmation;
