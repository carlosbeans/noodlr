import React from "react";
import Card from "../components/Card"


export default function Dashboard() {
    return (
        <section>
            <h1>Dashboard</h1>
            <div>I'm a dashboard</div>
            <div className="projects">
                <Card />
            </div>
        </section>        
    )
}