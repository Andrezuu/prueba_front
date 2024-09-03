import { Button, Checkbox, Popover, message } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import { useState } from "react";

const PayDebtButton = ({ seller }: any) => {
  const [visible, setVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
    try {
      console.log("seller:", seller);
      message.success("Pago realizado con éxito");
    } catch (error) {
      message.error("Error al realizar el pago");
    } finally {
      setVisible(false);
      setConfirmed(false);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setConfirmed(false);
    message.info("Pago cancelado");
  };

  const content = (
    <div>
      <Checkbox style={{ color: "#ff4d4f" }}>
        ¿Desea pagar las deudas existentes?
      </Checkbox>
      <div style={{ marginTop: 8, textAlign: "right" }}>
        <Button onClick={handleCancel} style={{ marginRight: 8 }}>
          Cancelar
        </Button>
        <Button type="primary" danger onClick={handleConfirm}>
          Pagar
        </Button>
      </div>
    </div>
  );

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Popover
        content={content}
        title="Pagar al vendedor"
        trigger="click"
        open={visible}
        onOpenChange={(newVisible) => setVisible(newVisible)}
        placement="right"
      >
        <Button type="default" icon={<DollarOutlined />} />
      </Popover>
    </div>
  );
};

export default PayDebtButton;