import React from "react";
import { Modal, Table, Menu, Icon } from "semantic-ui-react";
import HistoryItem from "./HistoryItem";

export default function HistoryModal({ historyList, onModalMount }) {
    const trigger = (
        <Menu.Item name="viewHistory">
            <Icon name="history" />
            View History
        </Menu.Item>
    );

    let historyItems = null;
    if (historyList)
        historyItems = historyList.map(history => (
            <HistoryItem
                key={history.id}
                id={history.id}
                changedBy={history.changedBy}
                statusFrom={history.statusFrom}
                statusTo={history.statusTo}
                changedOn={history.changeTime}
            />
        ));

    return (
        <Modal
            trigger={trigger}
            closeIcon
            closeOnEscape={false}
            closeOnDimmerClick={false}
            onMount={onModalMount}
        >
            <Modal.Header>File History</Modal.Header>
            <Modal.Content>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell rowSpan={2}>
                                History Item ID
                            </Table.HeaderCell>
                            <Table.HeaderCell colSpan={2}>
                                Changed By
                            </Table.HeaderCell>
                            <Table.HeaderCell rowSpan={2}>
                                Next Node
                            </Table.HeaderCell>
                            <Table.HeaderCell rowSpan={2}>
                                Status From
                            </Table.HeaderCell>
                            <Table.HeaderCell rowSpan={2}>
                                Status To
                            </Table.HeaderCell>
                            <Table.HeaderCell rowSpan={2}>
                                Changed On
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{historyItems}</Table.Body>
                </Table>
            </Modal.Content>
        </Modal>
    );
}
