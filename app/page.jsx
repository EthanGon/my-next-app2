"use client"

import Form from "./components/Form"
import Table from "./components/Table"
import { useState } from "react";


function HomePage() {

    const [newFavLink, setNewFavLink] = useState({});

    function handleNewLink(favLink) {
        console.log(favLink);
        setNewFavLink(favLink);
    }

    
    return (
       <div>
        <h1>FavLinks</h1>


        <Form submitLink={handleNewLink}/>




        <Table data={newFavLink}/>



       </div>
    )
}
export default HomePage