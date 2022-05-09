import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            style={{borderRadius:'24px'}}
        >
            <Modal.Header closeButton style={{backgroundColor:'#FFFFF0'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Вы уверены, что хотите удалить пользователя из базы данных?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'#FFFFF0'}}>
                <Form style={{marginLeft:'70px'}}>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
                <Button variant="outline-success " style={{marginLeft:'35px'}} onClick={onHide}>Удалить пользователя</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateType;
