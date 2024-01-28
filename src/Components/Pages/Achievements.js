// Desc: This is the data table for the achievements page
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";






/*const customStyles = {
    table: {
        style: {
            color: yellow,
            backgroundColor: black,
        },
    },
};
*/

function Achievements() {
   
    const columns = [
        {
            cell: row => {
                if (!row.imageUrl) {
                    
                    <img src={require(row.imageUrl)} alt={row.name} />

                }   
        },
            width: "70px"
        },
        {
            name: 'Achievement Name',
            //cell: row => <button style={{ color: 'white', backgroundColor: 'transparent', border: 'transparent' }} onClick={(row, event) => NavToAchievement(row.id)}>{row.title}</button>,
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'DLC',
            selector: row => row.dlcName,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => "todo",
            sortable: true,
        }

    ];


    const customStyles = {
        table: {
            style: {
                height: '500px',
                color: 'black',
            },
        },
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5281/Achievement')
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

export default Achievements;