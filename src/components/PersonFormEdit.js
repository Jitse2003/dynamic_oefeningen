import {Button, Form, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader} from "react-bootstrap";
import React, {useState} from "react";

export function PersonFormEdit(props) {
    const {setPersonSelected, personSelected, editPersonSave} = props;
    const [personToEdit, setPersonToEdit] = useState(personSelected)

    return <Modal show={personSelected}>
            <ModalHeader>

                <Form className="mx-3">
                    <div className="m-3">
                        <Form.Label>name input: </Form.Label>
                        <Form.Control id="search" value={personToEdit.name} onChange={e => setPersonToEdit({...personToEdit, name: e.target.value})}/>
                    </div>
                    <div className="m-3">
                        <Form.Label>age input: </Form.Label>
                        <Form.Control id="search" value={personToEdit.age} onChange={e => setPersonToEdit({...personToEdit, age: e.target.value})}/>
                    </div>
                    <div className="m-3">
                        <Form.Label>city input: </Form.Label>
                        <Form.Control id="search" value={personToEdit.city} onChange={e => setPersonToEdit({...personToEdit, city: e.target.value})}/>
                    </div>
                </Form>
                
                <Button onClick={() => setPersonSelected(undefined)}>x</Button>
            </ModalHeader>
            <ModalBody>
                <div>{personSelected.name}</div>
            </ModalBody>
        <ModalFooter>
            <Button onClick={() => editPersonSave(personToEdit)}>Save</Button>
            <Button onClick={() => setPersonSelected(undefined)}>Cancel</Button>
        </ModalFooter>
        </Modal>
}