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

    const navigate = useNavigate();
    function NavToAchievement(id) {
        navigate("/about");

    }

    const columns = [
        {
            cell: row => (
                <img src={row.imgsrc}/>
            ),
            width: "70px"
        },
        {
            name: 'Acheivement Name',
            cell: row => <button style={{color: 'white', backgroundColor: 'transparent', border: 'transparent'}} onClick={NavToAchievement}>{row.title}</button>,
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
            status: '48%',
            imgsrc: require("../images/achievements/california.webp"),
            id: '1'
        },
        {
            dlc: 'Base Game',
            title: 'Sea Dog',
            req: 'Deliver cargo to a port in Oakland and a port in San Francisco',
            status: '50%',
            imgsrc: require("../images/achievements/SeaDog.webp"),
            id: '2'
        },
        {
            dlc:  'Base Game',
            title: 'Cheers!',
            req: 'Deliver cargo from all 3 vineyards in California',
            status: '100%',
            imgsrc: require("../images/achievements/Cheers.webp"),
            id: '2'
        },
        {
            dlc: 'Base Game',
            title: 'Warming Up',
            req: 'Drive 10,000 miles during deliveries',
            status: '100%',
            imgsrc: require("../images/achievements/Warming up.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Rig Master',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Rig Master.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Company Collector',
            req: 'Perform deliveries for at least 15 different companies',
            status: '100%',
            imgsrc: require("../images/achievements/CompanyCollector.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'High Five',
            req: 'Complete a perfect delivery (no damage, no fines, in-time) for a job that is at least 600 miles',
            status: '100%',
            imgsrc: require("../images/achievements/HighFive.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Cha-Ching',
            req: 'Earn $100,000 delivering cargos',
            status: '100%',
            imgsrc: require("../images/achievements/Cha-Ching.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Final Makeover',
            req: 'Fully upgrade one of your garages',
            status: '100%',
            imgsrc: require("../images/achievements/FinalMakeover.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Not a Problem',
            req: 'Successfully park a trailer at a delivery point',
            status: '100%',
            imgsrc: require("../images/achievements/NotAProblem.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Like a Boss',
            req: 'Successfully park a trailer at a hard delivery point',
            status: '100%',
            imgsrc: require("../images/achievements/LikeABoss.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'I Think I Like It',
            req: 'Finish 50 deliveries',
            status: '100%',
            imgsrc: require("../images/achievements/IThink.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Pimp My Truck',
            req: 'Buy and apply a custom paintjob',
            status: '100%',
            imgsrc: require("../images/achievements/PimpMy.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'What\'s Your BMI?',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Bmi.webp"),
            id: '2' 
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
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Gold Fever',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/Gold Fever.webp"),
            id: '2' 
        },
        {
            dlc: 'Base Game',
            title: 'Parking Challenge',
            req: 'Buy your own truck',
            status: '100%',
            imgsrc: require("../images/achievements/ParkingChallenge.webp"),
            id: '2' 
        },
    ]

    return (
        <DataTable
            columns={columns}
            data={data}
            theme = "dark"
        />
    );
};

export default Achievements;