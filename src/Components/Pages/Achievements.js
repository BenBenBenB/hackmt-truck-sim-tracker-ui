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
    /*
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
    */

    const columns = [
        // {
        //     cell: row => (
        //         <img src={require(row.imageUrl)} alt={row.name} />
        //     ),
        //     width: "70px"
        // },
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

    const testData = [
        {
            dlc: 'Base Game',
            title: 'California Dreamin\'',
            req: 'Discover every city in California',
            status: '48%',
            imgsrc: require("../images/achievements/california.webp"),
            id: '4'
        },
        {
            dlc: 'Base Game',
            title: 'Sea Dog',
            req: 'Deliver cargo to a port in Oakland and a port in San Francisco',
            status: '50%',
            imgsrc: require("../images/achievements/SeaDog.webp"),
            id: '5'
        },
        {
            dlc: 'Base Game',
            title: 'Cheers!',
            req: 'Deliver cargo from all 3 vineyards in California',
            status: '100%',
            imgsrc: require("../images/achievements/Cheers.webp"),
            id: '6'
        },
        {
            dlc: 'Base Game',
            title: 'Warming Up',
            req: 'Drive 10,000 miles during deliveries',
            status: '100%',
            imgsrc: require("../images/achievements/Warming up.webp"),
            id: '7'
        },
        {
            dlc: 'Base Game',
            title: 'Rig Master',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Rig Master.webp"),
            id: '8'
        },
        {
            dlc: 'Base Game',
            title: 'Company Collector',
            req: 'Perform deliveries for at least 15 different companies',
            status: '100%',
            imgsrc: require("../images/achievements/CompanyCollector.webp"),
            id: '9'
        },
        {
            dlc: 'Base Game',
            title: 'High Five',
            req: 'Complete a perfect delivery (no damage, no fines, in-time) for a job that is at least 600 miles',
            status: '100%',
            imgsrc: require("../images/achievements/HighFive.webp"),
            id: '10'
        },
        {
            dlc: 'Base Game',
            title: 'Cha-Ching',
            req: 'Earn $100,000 delivering cargos',
            status: '100%',
            imgsrc: require("../images/achievements/Cha-Ching.webp"),
            id: '1'
        },
        {
            dlc: 'Base Game',
            title: 'Final Makeover',
            req: 'Fully upgrade one of your garages',
            status: '100%',
            imgsrc: require("../images/achievements/FinalMakeover.webp"),
            id: '11'
        },
        {
            dlc: 'Base Game',
            title: 'Not a Problem',
            req: 'Successfully park a trailer at a delivery point',
            status: '100%',
            imgsrc: require("../images/achievements/NotAProblem.webp"),
            id: '12'
        },
        {
            dlc: 'Base Game',
            title: 'Like a Boss',
            req: 'Successfully park a trailer at a hard delivery point',
            status: '100%',
            imgsrc: require("../images/achievements/LikeABoss.webp"),
            id: '13'
        },
        {
            dlc: 'Base Game',
            title: 'I Think I Like It',
            req: 'Finish 50 deliveries',
            status: '100%',
            imgsrc: require("../images/achievements/IThink.webp"),
            id: '14'
        },
        {
            dlc: 'Base Game',
            title: 'Pimp My Truck',
            req: 'Buy and apply a custom paintjob',
            status: '100%',
            imgsrc: require("../images/achievements/PimpMy.webp"),
            id: '15'
        },
        {
            dlc: 'Base Game',
            title: 'What\'s Your BMI?',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Bmi.webp"),
            id: '3'
        },
        {
            dlc: 'Base Game',
            title: 'Gas Guzzler',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/GasGuzzler.webp"),
            id: '2'
        },
        {
            dlc: 'Base Game',
            title: 'Silver State',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/SilverState.webp"),
            id: '16'
        },
        {
            dlc: 'Base Game',
            title: 'Gold Fever',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Gold Fever.webp"),
            id: '17'
        },
        {
            dlc: 'Base Game',
            title: 'Parking Challenge',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/ParkingChallenge.webp"),
            id: '18'
        },
    ]

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
        fetch('https://localhost:25565/Achievement')
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