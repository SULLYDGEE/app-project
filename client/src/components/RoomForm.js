import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RoomForm = ({ id, room, setRoom }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // Mettre à jour le formulaire à chaque fois que `room` change
  useEffect(() => {
    if (room) {
      form.setFieldsValue(room); // Mettre à jour le formulaire avec les nouvelles valeurs
    }
  }, [room, form]);

  const onFinish = async (values) => {
    await window.fetch(`/api/rooms/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(values),
    });

    console.log("Success:", values);
    setRoom(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = async () => {
    await window.fetch(`/api/rooms/${id}`, {
      method: "DELETE",
    });

    navigate("/rooms");
  };

  return (
    <Form
      form={form}
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nom"
        name="name"
        rules={[
          {
            required: true,
            message: "Merci d'entrer le nom de la chambre.",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Capacité max"
        name="maxPersons"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Soumettre
        </Button>
        <Button
          onClick={handleDelete}
          type="danger"
          style={{ marginLeft: "1rem" }}
        >
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomForm;

