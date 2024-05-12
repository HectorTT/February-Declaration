import { useState } from "react"
import confetti from 'canvas-confetti'

export const useChangeElements = () => {
    const [index, setIndex] = useState(0)
    const [indexIntro, setIndexIntro] = useState(0)
    const [textP, setTextP] = useState('Vamos, respondeme! ')
    //const [image, setImage] = useState('https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif')
    const [image, setImage] = useState('https://media.tenor.com/8N58zR-v77kAAAAj/love-you.gif')

    const introOptions = [ 'Ya te dije hoy lo hermosa que estas', 'Si no es asi...', '!!!Estas bien hermosa¡¡¡','como estas, como te sientes?', 'ya comiste?','sabes algo...', 'Estas ultimas semanas las he disfrutado mucho', 'gracias a ti', 'me encanta hablar contigo', 'disfruto mucho pasar tiempo contigo', 'Asi que he estado pensando', 'por que si a veces yo pienso', 'pero tampoco pasa muy seguido jajaja', 'pero buen, bueno. YO ...', 'QUIERO PREGUNTARTE ALGO', 'pero no sabia como', 'Y se me ocurrio', 'Hacerte esta pagina', 'Ya que cartulinas no se hacer jeje', 'Quieres ser mi novia?']
    const [textIntro, setTextIntro] = useState('Hola, Gloria!')

    const options = ['Segura?', 'Segurisima?', 'Estas completamente segura?', 'No te arrepentiras?', 'Pero si estas segura?', 'No hay vuelta atras', 'No hay devoluciones', 'No hay garantias', 'No hay reembolsos', 'No hay cambios', 'No hay nada', 'No hay', 'Que no hay']

    const handleButtonNo = () => {
        setIndex(index + 1)
        setImage('https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif')
        setTextP(options.at(index))
        
        if(index === options.length - 1) setIndex(0)
    }

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif")
        setTextP('YEY <3')
        confetti()
        confetti()
        confetti()
    }
    const handleButtonNext = () => {
        setIndexIntro(indexIntro + 1)
        setTextIntro(introOptions.at(indexIntro))
        if(indexIntro === introOptions.length - 1){
            setIndexIntro(introOptions.length - 1)
            setTextIntro(introOptions.at(indexIntro))
        }
    }

    return { handleButtonNo, handleButtonYes, textP, image, handleButtonNext, textIntro }
}