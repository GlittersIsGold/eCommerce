import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
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
                    Изменение данных пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor:'#FFFFF0'}}>
                <Form>
                     <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Имя"
                    />
                                         <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Фамилия"
                    />
                                         <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="E-mail"
                    />
                                         <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Телефон"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor:'#FFFFF0'}}>
                <Button variant="outline-danger" onClick={onHide}>Отмена</Button>
                <Button variant="outline-success" onClick={onHide}>Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;
