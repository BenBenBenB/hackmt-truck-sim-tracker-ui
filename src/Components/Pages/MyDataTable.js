import React from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'Acheivement Name',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Requirements',
        selector: row => row.req,
        sortable: true,
    },
    {
        name: 'DLC',
        selector: row => row.dlc,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    }
];

const data = [
    {
        dlc: 'Base Game',
        title: 'California Dreamin\'',
        req: 'Discover every city in California',
        status: '48%'
    },
    {
        dlc: 'Base Game',
        title: 'Sea Dog',
        req: 'Deliver cargo to a port in Oakland and a port in San Francisco',
        status: '50%'
    },
    {
        dlc:  'Base Game',
        title: 'Cheers!',
        req: 'Deliver cargo from all 3 vineyards in California',
        status: '100%'
    },
    {
        dlc: 'Base Game',
        title: 'Warming Up',
        req: 'Drive 10,000 miles during deliveries',
        status: '100%'
    },
]

/*const customStyles = {
    table: {
        style: {
            color: yellow,
            backgroundColor: black,
        },
    },
};
*/
function MyDataTable() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};

export default MyDataTable;