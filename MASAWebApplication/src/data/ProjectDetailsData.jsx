export const ProjectsDetailsData = {
    "Project S.H.A.G.E.E": {
        name: "Project S.H.A.G.E.E",
        date: "2023 - 2024",
    },
    "Project Under Pressure": {
        name: "Project Under Pressure",
        date: "2022 - 2023",
    },
    "Operation HAZMAT": {
        name: "Operation HAZMAT",
        date: "2021 - 2022",
        description: "HASMAT was a boosted Dart configuration. There was one motor at the bottom of the booster, and when the motor burned out, the dart would separate and continue to the target apogee of 10,000 ft. Airbrakes in the dart would deploy to slow down the craft to achieve a more accurate apogee. For ease of integration of A&P electronic systems, the team created the AARM (Airbrakes and Avionics Rotational Mount). The AARM slid into the dart, key feature at the bottom of the mount would lock into a bulkhead in the dart with a set screw.",
        details: [
            {
                name: "GOAT",
                description: "The GOAT or Global Operational Airbrake Tuner was a SRAD PCB that was tasked with Opening and closing the airbrakes to a  desired position. Using a microcontroller it would Receive updates over CAN from the LAPDOG board. From there it will move a Bi-Polar Stepper motor connected to the airbrakes to the requested position."
            },
            {
                name: "Camera",
                description: "The Cameras were responsible for recording the flight of the rocket. Two raspberry pi camera modules were attached opposite sides of the rocket for symmetry and to get the greatest viewing angle. When powered the system will record and save many short videos so that when the power is cut most of the flight will stay recorded. Additionally it would send the video over to the LAPDOG to send to ground."
            },
            {
                name: "PMSMK3",
                description: "The PMSMK3 or Power Management System mk3 is a SRAD PCB that was responsible for powering and ensuring the safety of the Payload electronics. Additionally it served as a battery charger and balancer for the Li-ion batteries. During flight the board will gather the current draw for each board, and the ambient tempature and send it to the LAPDOG board to be stored and transmitted to ground."
            },
            {
                name: "LAPDOG",
                description: " Project LAPDOG was a custom PCB that acted as a central flight computer for the system. Project LAPDOG took in various data from every other board, log it and then send it to ground though its own custom radio. Additionally it ran the Airbrake control software that took information from a large lookup table and then tell the GOAT to move the airbrakes accordingly."
            },
            {
                name: "SEED",
                description: "The SEED board was a SRAD pcb responsible for operating and measuring the Experiment ran on project HASMAT. It Opened the experiment valve with a servo motor. Then read the tempature and pressure of the Experiment and sent it to the LAPDOG for logging."
            },
            {
                name: "GPS",
                description: "The GPS systems would gather and send the Rockets GPS coordinates to ground. This allowed us to track the rocket after flight in order to help us recover it."
            }
        ]
    },
    "Boosted Bear: The Next Generation": {
        name: "Boosted Bear: The Next Generation",
        date: "2020 - 2021",
    },
    "Boosted Bear: New Mexico Drift": {
        name: "Boosted Bear: New Mexico Drift",
        date: "2019 - 2020",
    },
    "2 Boosted 2 Bear": {
        name: "2 Boosted 2 Bear",
        date: "2018 - 2019",
    },
    "Boosted Bear": {
        name: "Boosted Bear",
        date: "2017 - 2018",
    },
    "Overwatch": {
        name: "Overwatch",
        date: "2016 - 2017",
    },
    "Test Rocket Series": {
        name: "Test Rocket Series",
        date: null,
    }
}