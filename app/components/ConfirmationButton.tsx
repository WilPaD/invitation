import React from "react";
import { Button } from "keep-react";
import Image from "next/image";
import { WhatsappLogo } from "phosphor-react";
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
        <div>
          <Button
            onClick={handleSendWhatsApp}
            className="inline-flex items-center mt-4 gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <WhatsappLogo size={22} color="#fafafa" />
            Confirmar asistencia
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusic;
