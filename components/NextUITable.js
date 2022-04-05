import { Table } from '@nextui-org/react';

export default function NextUITable() {
    const columns = [
        {
          key: "name",
          label: "NAME",
        },
        {
          key: "role",
          label: "ROLE",
        },
        {
          key: "status",
          label: "STATUS",
        },
      ];
      const rows = [
        {
          key: "1",
          name: "Tony Reichert",
          role: "CEO",
          status: "Active",
        },
        {
          key: "2",
          name: "Zoey Lang",
          role: "Technical Lead",
          status: "Paused",
        },
        {
          key: "3",
          name: "Jane Fisher",
          role: "Senior Developer",
          status: "Active",
        },
        {
          key: "4",
          name: "William Howard",
          role: "Community Manager",
          status: "Vacation",
        },
      ];
      return (
        <>
        <Table
          aria-label="Example table with dynamic content"
          bordered
          lined
          shadow={false}
          css={{
            height: "auto",
          }}
          selectionMode="single"
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={rows}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        <style jsx global>{`
          `}
        </style>
        </>
      );
    }