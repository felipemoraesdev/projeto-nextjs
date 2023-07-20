
interface IButtonWhatsappProps {
    handlePressWhatsapp: (message: string) => void;
}

export function ButtonWhatsapp({ handlePressWhatsapp }: IButtonWhatsappProps) {
    return (
        <button type='button' onClick={() => handlePressWhatsapp('Olá, quero saber sobre os planos da claro!')} className="fixed right-8 bottom-4 shadow-2xl bg-transparent animate-bounce">
            <img src={"/assets/whatsapp2.png"} alt="whatsapp" className="bg-transparent" />
        </button>
    )
}