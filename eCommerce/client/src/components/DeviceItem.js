import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{border: '1px solid transparent', width: 200, cursor: 'pointer', backgroundColor:'transparent'}}>


                <Image width={200} height={200} src={process.env.REACT_APP_API_URL + device.img}  style={{borderRadius:'25px'}}/><br/>


                <div style={{width: '90%', margin: '0 auto', marginLeft:'35px', marginRight:'35px',}}>
                                 {device.name}
                    <br/>
                        {device.price} ₽
                </div>

            </Card>
        </Col>
    );
};

export default DeviceItem;
