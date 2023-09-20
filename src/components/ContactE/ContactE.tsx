import React from "react";
import VCard from 'vcard-creator'
import { StaticImage } from "gatsby-plugin-image";

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import * as classes from './styles.module.css';

interface ContactPrps {
    title: string
    phone: string
    email: string
}

export const Contact = ({ title, phone, email, img, alt }) => {
    const destinatario = 'info@rpmspeedcode.com';

    // Asunto del correo electrónico
    const asunto = 'Cotizacion desarollo';

    const enlaceCorreoP = `mailto:${email}?subject=${encodeURIComponent(asunto)}`;
    const enlaceCorreoW = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`;
    const urlWhatsApp = 'https://api.whatsapp.com/send?phone=+525527322661&text=Hola';

   const descargarContacto = () => {
        const vCard = new VCard();
        vCard.addName('Eiichi', 'Matsuo');

        const telefono = '+52 5527322661'
        vCard.addPhoneNumber(telefono);
        vCard.addCompany('Rpm Code')
        vCard.addJobtitle('Software developer')
        vCard.addEmail('e.matsuo99@gmail.com')
    
        const vCardData = vCard.toString()

        const blob = new Blob([vCardData], { type: "text/vcard" });
    
        const a = document.createElement("a");

        a.style.display = "none";
        a.href = URL.createObjectURL(blob);
        a.download = "contacto_eiichi.vcf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);
      };
    return(
        <div className={classes.Layout}>
            <div className={classes.Container}>
                <StaticImage src="../../img/rpm_white.svg" alt="rpm code" />
                <div className={classes.Img_Container}>
                    <StaticImage
                        src="../../img/eiichi.jpeg"
                        alt={alt}
                        className={classes.Img}
                    />
                </div>
            </div>
            <div  className={classes.Info_Container}>
                <div  className={classes.Title_Container}>
                    <StaticImage 
                        src="../../img/x_blanco.svg" 
                        alt="rpm code"
                        className={classes.Title_Container_IMG}
                    />
                    <h2 className={classes.Title}>{title}</h2>
                </div>
                <div className={classes.Container_Info}>
                    <div className={classes.Info}>
                        <PhoneIphoneIcon className={classes.Icon1}/>
                        <a href="tel:+525527322661" className={classes.Info_Text2}>{phone}</a>
                    </div>
                    <div className={classes.Info}>
                        <WhatsAppIcon className={classes.Icon2}/>
                        <a 
                        target="_blank"
                        href={urlWhatsApp} className={classes.Info_Text1}>WhatsApp</a>
                    </div>
                    <div className={classes.Info}>
                        <EmailIcon  className={classes.Icon1}/>
                        <div>
                         <a href={enlaceCorreoP} className={classes.Info_Text2}>{email}</a>
                         <a href={enlaceCorreoW} className={classes.Info_Text2}>info@rpmspeedcode.com</a>
                        </div>
                    </div>
                    <div className={classes.Info}>
                        <LanguageIcon className={classes.Icon2}/>
                        <a href="https://www.rpmspeedcode.com/" target="_blank" className={classes.Info_Text1}>rpmspeedcode.com</a>
                    </div>
                    <div className={classes.Info}>
                        <GitHubIcon className={classes.Icon1}/>
                        <a href="https://github.com/EiichiM" target="_blank" className={classes.Info_Text2}>Git Hub</a>
                    </div>
                </div>
            </div>
            <button onClick={descargarContacto} className={classes.Button_Contact}>
                <PersonAddIcon className={classes.Dowload} />
            </button>
        </div>
    )
}