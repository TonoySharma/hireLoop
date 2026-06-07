import { Table } from "@heroui/react";
import FadeUp from "../FadeUp";
import { FaArrowRight } from "react-icons/fa6";

export function TableComponent() {
    return (
        <FadeUp>
            <div className="flex items-center justify-between my-8">
                <h2 className="text-2xl font-medium mb-4">Recent Applications</h2>
                <p className="font-medium cursor-pointer hover:underline flex items-center gap-1">View all<FaArrowRight /></p>
            </div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Candidate Name</Table.Column>
                            <Table.Column>Role</Table.Column>
                            <Table.Column>Date Applied</Table.Column>
                            <Table.Column>Experience</Table.Column>
                            {/* <Table.Column>Status</Table.Column> */}
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Julianne Moore</Table.Cell>
                                <Table.Cell>Senior Product Designer</Table.Cell>
                                <Table.Cell>Oct 24, 2023</Table.Cell>
                                <Table.Cell>6 years</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Robert Downey</Table.Cell>
                                <Table.Cell>Backend Engineer</Table.Cell>
                                <Table.Cell>Oct 23, 2023</Table.Cell>
                                <Table.Cell>4 years</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Emma Stone</Table.Cell>
                                <Table.Cell>Marketing Lead</Table.Cell>
                                <Table.Cell>Oct 22, 2023</Table.Cell>
                                <Table.Cell>8 years</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Chris Pratt</Table.Cell>
                                <Table.Cell>Product Manager</Table.Cell>
                                <Table.Cell>Oct 21, 2023</Table.Cell>
                                <Table.Cell>10 years</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </FadeUp>
    );
}