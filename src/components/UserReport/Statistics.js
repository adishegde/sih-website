import React from "react";
import { Segment, Grid, Table } from "semantic-ui-react";
import PieChart from "react-minimal-pie-chart";

function LegendItem({ text, color }) {
    return (
        <Grid.Column style={{ backgroundColor: color }} textAlign="center">
            <Segment style={{ backgroundColor: color }} inverted>
                {text}
            </Segment>
        </Grid.Column>
    );
}

export default function Statistics({
    totalFilesTransferred,
    totalFilesLost,
    totalFilesLegalHold
}) {
    return (
        <div>
            <Segment compact basic>
                <PieChart
                    data={[
                        {
                            value: totalFilesTransferred || 0,
                            key: 1,
                            color: "#E38627"
                        },
                        {
                            value: totalFilesLost || 0,
                            key: 2,
                            color: "#C13C37"
                        },
                        {
                            value: totalFilesLegalHold || 0,
                            key: 3,
                            color: "#6A2135"
                        }
                    ]}
                    radius={50}
                />
            </Segment>
            <Segment compact basic>
                <Grid centered columns={3}>
                    <Grid.Row>
                        <LegendItem
                            text="Number Of Files Transferred"
                            color="#E38627"
                        />
                        <LegendItem
                            text="Number Of Files Lost"
                            color="#C13C37"
                        />
                        <LegendItem
                            text="Number Of Files Legally Held"
                            color="#6A2135"
                        />
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment basic>
                <Table definition>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>Value</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Number Of Files Transfered</Table.Cell>
                            <Table.Cell>{totalFilesTransferred}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Number Of Files Lost</Table.Cell>
                            <Table.Cell>{totalFilesLost}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                Number Of Files Legally Held
                            </Table.Cell>
                            <Table.Cell>{totalFilesLegalHold}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Segment>
        </div>
    );
}
