import React from "react";
import { Button } from "keep-react";
import Image from "next/image";
interface ConfirmationButtonProps {
  phone: string;
  message: string;
}

const BackgroundMusic: React.FC<ConfirmationButtonProps> = ({
  phone,
  message,
}) => {
  const handleSendWhatsApp = () => {
    const formattedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${formattedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-center">
          Al dar click en el botón escríbenos tu nombre completo para agregarte
          a nuestra lista de invitados.
        </p>

        <div>
          <Button onClick={handleSendWhatsApp}>
            <Image
              src="/WhatsApp_icon.png"
              alt="whatsapp_icon"
              width={24}
              height={24}
              priority
            />
            ¡Click Aquí!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
