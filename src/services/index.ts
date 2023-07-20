import { api } from "../lib/axios";

export async function handleClickWhatsApp(msg: string) {
    const msgQuery = encodeURI(msg);

    try {
      const whatsappList = await api.get("/");
      const number = whatsappList.data.number;

      window.open(`https://api.whatsapp.com/send?phone=55${number}&text=${msgQuery}`, '_blank');
      
    } catch (err) {
      console.log(err)
      window.open(`https://api.whatsapp.com/send?phone=5541984525562&text=${msgQuery}`, '_blank');
    }

}