import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
const Favorites = () => {

    return (
        <div>
            <Collapse defaultActiveKey={['1']} ghost>
                <Panel header="Frequently header 1" key="1">
                    <p>{"bfjbsdfjbjhbj"}</p>
                </Panel>
            </Collapse>
            
        </div>
    )
}

export default Favorites