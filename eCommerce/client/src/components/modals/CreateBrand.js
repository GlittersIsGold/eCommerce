import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton 
            style={{backgroundColor:'#FFFFF0'}}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить подкатегорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body
            style={{backgroundColor:'#FFFFF0'}}
            >
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название категории"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer
            style={{backgroundColor:'#FFFFF0'}}
            >
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
