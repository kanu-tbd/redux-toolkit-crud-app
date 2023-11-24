import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Label,
} from "reactstrap";
import { addUsers, updateUsers } from "../../Api/Contents";

function FormModal({ modal, toggle, isEdit }) {
  const dispatch = useDispatch();
  const getSingleData = useSelector((y) => y.user.singledata);
  const isRefresh = useSelector((y) => y.user.isRefresh);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  useEffect(() => {
    console.log(isEdit, "isEdit");
    if (isEdit === "Add User") {
      setFormData({ name: "", phone: "" });
    }
  }, [isEdit]);

  useEffect(() => {
    if (!getSingleData) return;
    setFormData(getSingleData);
  }, [getSingleData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isEdit === "Update") {
      dispatch(updateUsers(formData));
    } else {
        dispatch(addUsers(formData));
    }

    console.log(formData, "formdata111111111111111111111");
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name || ""}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Label htmlFor="phone">Phone</Label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={formData.phone || ""}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            {isEdit}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormModal;
