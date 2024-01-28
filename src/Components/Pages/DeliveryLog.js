// Desc: This is the data table for the achievements page
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: 'Cargo',
        selector: 'cargo',
        sortable: true,
    },
    {
        name: 'Day',
        selector: 'day',
        sortable: true,
    },
    {
        name: 'From',
        selector: 'from',
        sortable: true,
    },
    {
        name: 'To',
        selector: 'to',
        sortable: true,
    },
    {
        name: 'Distance',
        selector: 'distance',
        sortable: true,
    },
    {
        name: 'Time Spent',
        selector: 'timeSpent',
        sortable: true,
    },
    {
        name: 'Rating',
        selector: 'rating',
        sortable: true,
    },
    {
        name: 'Income',
        selector: 'income',
        sortable: true,
    },
    {
        name: 'XP',
        selector: 'xp',
        sortable: true,
    }
];

const deliveryLogData = [
    {
        cargo: 'Electronics',
        day: 'Monday',
        from: 'Los Angeles',
        to: 'San Francisco',
        distance: '400 miles',
        timeSpent: '4 hours',
        rating: '5 stars',
        income: '$500',
        xp: '100',
    },
    {
        cargo: 'Furniture',
        day: 'Tuesday',
        from: 'San Francisco',
        to: 'Seattle',
        distance: '800 miles',
        timeSpent: '8 hours',
        rating: '4 stars',
        income: '$800',
        xp: '150',
    },
    {
        cargo: 'Food',
        day: 'Wednesday',
        from: 'Seattle',
        to: 'Portland',
        distance: '150 miles',
        timeSpent: '2 hours',
        rating: '3 stars',
        income: '$300',
        xp: '50',
    },
    {
        cargo: 'Clothing',
        day: 'Thursday',
        from: 'Portland',
        to: 'Los Angeles',
        distance: '1000 miles',
        timeSpent: '10 hours',
        rating: '5 stars',
        income: '$1000',
        xp: '200',
    },
];

function DeliveryLog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://10.82.137.128/Job')
            .then(response => response.json())
            .then(apiData => {
                setData(apiData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <DataTable
            columns={columns}
            data={data}
            theme="dark"
        />
    );
};

export default DeliveryLog;
