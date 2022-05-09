import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                     style={{cursor:'pointer', backgroundColor:'#AAD', width:'200px', marginTop:'5px', color:'#FFFFF0', borderRadius:'24px', textAlign:'center', fontSize:'24px'}}
                    key={brand.id}
                    className="p-3 ml-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
