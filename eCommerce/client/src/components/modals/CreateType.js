import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
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
                    Добавить категорию
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'#FFFFF0'}}>
                <Form>
                    <Form.Control 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название подкатегории"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'#FFFFF0'}}>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
