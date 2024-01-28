// Desc: This is the data table for the Delivery Log page
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Cargo Name',
        selector: row => row.cargoName,
        sortable: true,
    },
    {
        name: 'Sender',
        selector: row => row.depotFromName,
        sortable: true,
    },
    {
        name: 'Origin',
        selector: row => row.depotFromLocation,
        sortable: true,
    },
    {
        name: 'Receiver',
        selector: row => row.depotToName,
        sortable: true,
    },
    {
        name: 'Destination',
        selector: row => row.depotToLocation,
        sortable: true,
    },
    {
        name: 'Paid',
        selector: row => row.paid,
        sortable: true,
    },
    {
        name: 'Experience',
        selector: row => row.exp,
        sortable: true,
    },
    {
        name: 'Perfect',
        selector: row => row.perfect? "Yes" : "No",
        sortable: true,
    }
];

const deliveryLogData = [
    {
        "id": 1,
        "cargoName": "CargoToDo",
        "depotFromName": "ToName",
        "depotFromLocation": "Todo, TD",
        "depotToName": "FromName",
        "depotToLocation": "Todo, TD",
        "paid": 0,
        "exp": 0,
        "perfect": false
      }
    
];

function DeliveryLog() {
    const [data, setData] = useState(deliveryLogData);

    // useEffect(() => {
    //     fetch('https://10.82.137.128/Job')
    //         .then(response => response.json())
    //         .then(apiData => {
    //             setData(apiData);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    return (
        <DataTable
            columns={columns}
            data={data}
            theme="dark"
        />
    );
};

export default DeliveryLog;
