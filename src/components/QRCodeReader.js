import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QRReader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: 300,
            result: null
        };

        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data
            });

            this.props.onScan(data);
            console.log(data);
        }
    }

    handleError(err) {
        console.error(err);
    }

    render() {
        return (
            <div>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{
                        height: "50%",
                        width: "30%"
                    }}
                />
            </div>
        );
    }
}
export default QRReader;
