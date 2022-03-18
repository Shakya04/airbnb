import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

export default function App() {
    const  cardCmp = data.map((content) => {
        return <Card
            key = {content.id}
            content = {content}
            //can use spread as {...content} so no need .content in card.js jsx
        />
    })
    return(
        <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
            {cardCmp}
            </section>
            
        </div>
    ) 
}
