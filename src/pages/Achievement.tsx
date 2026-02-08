import './Achievement.css';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


const interiit = [
    {
        title: 'Gold in HBCSE, TIFR',
        description: 'No Prep: Astronomy',
        date: '2024',
    },
    {
        title: '4th place in ISRO event',
        description: 'High Prep : Astronomy',
        date: '2024',
    }
]
const nssc2023 = [
    {
        title: 'First Place in Cosmomath',
        description: 'Team: Hardik Sharma, Aarav Mehta',
        date: 'October 2023',
    },
    {
        title: 'Second Place in Asteroid Venture',
        description: 'Team: Shashank Shekhar Singh, Debangi Ghosh',
        date: 'October 2023',
    },
    {
        title: 'Third Place in Case Study',
        description: 'Team : Yasvardhan, Sanyam Jain',
        date: 'October 2023',
    }
]
const nssc2022 = [
    {
        title: 'First Place in Case Study',
        description: 'Team : Manash Kumar, Prayash Dash & Sushil',
        date: 'October 2022',
    },
    {
        title: 'Second Place in Cosmomath',
        description: 'Team: Sanskar Singh & Abhay',
        date: 'October 2022',
    }
]
const nssc2021 = [
    {
        title: 'Second Place in Case Study',
        description: 'Team: Neeraj Kamal, Pratyush Singh & Praveen Kumar',
        date: '2021',
    }
]
const anvesha = [
    {
        title: 'First Place in BAHfest',
        description: 'Team: Moulik Deviprasad Ketkar',
        date: '2021',
    }
]
const astrochamp = [
    {
        title: 'First Place in Case Study',
        description: 'Team: Preety, Harsh, Atharv, Preksha, Adrija, Manish, Pratyush, Utkarsh, Jashandeep & Varun',
        date: '2021',
    },
    {
        title: 'Second place in Graphic Designing',
        description: 'Team: Prince',
        date: '2021',
    }
]
const iaac = [
    {
        title: 'Gold Honour and Top 1% of all participants',
        description: 'Team: Pratyush ',
        date: '2021',
    }
]
const astrax = [
    {
        title: '1st place in Astrophotography event',
        description: 'Team Shooting star: Amit Kumar Baheti',
        date: '2020',
    }
]
const nssc2019 = [
    {
        title: 'Second place in Case Study',
        description: 'Team: Yash Vinod & Vaibhav Singh',
        date: '2019',
    },
    {
        title: 'Third place in Case Study',
        description: 'Team: Vamsi Bodaballa & Aditya Keshari',
        date: '2019',
    },
    {
        title: 'First place in The Science of Paper Folding',
        description: 'Team: Arjeet Dewanagan & Anmol Saluja',
        date: '2019',
    },
    {
        title: 'Third place in The Science of Paper Folding',
        description: 'Team: Yash Vinod & Vaibhav Singh',
        date: '2019',
    }
]
const nssc2018 = [
    {
        title: 'First place in Case Study',
        description: 'Team: Ayush Kumar Singh & Srishti Singh',
        date: '2018',
    },
    {
        title: 'Second place in The Science of Paper Folding',
        description: 'Team: Yash Vinod & Vaibhav Krishna',
        date: '2018',
    },
    {
        title: 'Third place in Designeer',
        description: 'Team: Rahul Vishwakarma, Pranjal & Yash Agarwal',
        date: '2018',
    },
]



const Achievements = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);



    const template = (title: string, data: any[]) => (
        <div className="section">
            <h2 className="section-title">{title}</h2>
            <div className="card-grid">
                {data.map((item, index) => (
                    <div key={index} className="achievement-card">
                        <div className="card-header">
                            <img src="/trophy2.png" alt="Trophy" />
                            <h3>{item.title}</h3>
                        </div>
                        <p className="card-desc">{item.description}</p>
                        <p className="card-date">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (

        <div className="achievements-page" style={{ backgroundImage: "url('/image.png')" }}>

            {/* Custom Cursor */}
            <div
                className="star-cursor"
                style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)` }}
            >
                <img src="/star.png" alt="Cursor" />
            </div>

            {/* Heading with Animation */}
            <motion.h1
                className="page-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Winners
            </motion.h1>

            {template("Inter-IIT Tech Meet 13.0", interiit)}
            {template("NSSC'23 - IIT Kharagpur", nssc2023)}
            {template("NSSC'22 - IIT Kharagpur", nssc2022)}
            {template("NSSC'21 - IIT Kharagpur", nssc2021)}
            {template("Anvesha'21 - IISER TVM", anvesha)}
            {template("Astrochamp'21 - IIT Bhubaneswar", astrochamp)}
            {template("IAAC'21", iaac)}
            {template("Astrax'20 - IIT Mandi", astrax)}
            {template("NSSC'19 - IIT Kharagpur", nssc2019)}
            {template("NSSC'18 - IIT Kharagpur", nssc2018)}
        </div>
    )
}

export default Achievements
