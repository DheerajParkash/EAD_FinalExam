import React from 'react'
import { Collapse } from 'antd';
import AddUrl from "../components/Modal/AddUrl"

const { Panel } = Collapse;

const Favorites = () => {

    return (
        <div className="favorites">
           <AddUrl/>
        </div>
    )
}

export default Favorites