import { Table, useAsyncList, useCollator } from "@nextui-org/react";

export default function NextUIAsyncTable() {
	const collator = useCollator({ numeric: true });
	async function load() {
		const res = await fetch(
			"https://raw.githubusercontent.com/HullRyan/test_data/main/StaffWithScholarData.json"
		);
		const json = await res.json();
		console.log(json.results);
		return {
			items: json,
		};
	}
	async function sort({ items, sortDescriptor }) {
		return {
			items: items.sort((a, b) => {
				let first = a[sortDescriptor.column];
				let second = b[sortDescriptor.column];
				let cmp = collator.compare(first, second);
				if (sortDescriptor.direction === "descending") {
					cmp *= -1;
				}
				return cmp;
			}),
		};
	}
	const list = useAsyncList({ load, sort });
	return (
		<div className="AsyncTableHolder">
			<Table
				aria-label="Example static collection table"
				css={{ minWidth: "100%", height: "100%" }}
				sortDescriptor={list.sortDescriptor}
				onSortChange={list.sort}
        selectionMode="single"
        lined
			>
				<Table.Header>
					<Table.Column key="name" allowsSorting>
						Name
					</Table.Column>
					<Table.Column key="cited_by" allowsSorting>
						Cited By
					</Table.Column>
					<Table.Column key="college" allowsSorting>
						College
					</Table.Column>
					<Table.Column key="department" allowsSorting>
						Department
					</Table.Column>
				</Table.Header>
				<Table.Body
					items={list.items}
					loadingState={list.loadingState}
				>
					{(item) => (
						<Table.Row key={item.name}>
							{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
						</Table.Row>
					)}
				</Table.Body>
			</Table>
			<style jsx global>
				{`
        .AsyncTableHolder {
          height: 300px;
        }
				`}
			</style>
		</div>
	);
}
