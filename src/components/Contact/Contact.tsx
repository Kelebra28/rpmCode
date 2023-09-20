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

   const descargarContacto = () => {
        // Crear un objeto vCard
        const vCard = new VCard();
        vCard.addName('Basurto', 'Ricardo');

        const telefono = '+52 55 12431147'
        vCard.addPhoneNumber(telefono);
        vCard.addCompany('Rpm Code')
        vCard.addJobtitle('Software developer')
        vCard.addEmail('ricardokelebra@gmail.com')
    
        const vCardData = vCard.toString()

        const blob = new Blob([vCardData], { type: "text/vcard" });
    
        const a = document.createElement("a");

        a.style.display = "none";
        a.href = URL.createObjectURL(blob);
        a.download = "contacto_ricardo.vcf";
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
                        src="../../img/ricardo.jpeg"
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
                <div>
                    <div className={classes.Info}>
                        <PhoneIphoneIcon className={classes.Icon1}/>
                        <p className={classes.Info_Text}>{phone}</p>
                    </div>
                    <div className={classes.Info}>
                        <WhatsAppIcon className={classes.Icon2}/>
                        <a 
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=+52%2055%2012431147&text=%C2%A1Hola!" className={classes.Info_Text}>WhatsApp</a>
                    </div>
                    <div className={classes.Info}>
                        <EmailIcon  className={classes.Icon1}/>
                        <div>
                         <p className={classes.Info_Text}>{email}</p>
                         <p className={classes.Info_Text}>info@rpmspeedcode.com</p>
                        </div>
                    </div>
                    <div className={classes.Info}>
                        <LanguageIcon className={classes.Icon2}/>
                        <p className={classes.Info_Text}>rpmspeedcode.com</p>
                    </div>
                    <div className={classes.Info}>
                        <GitHubIcon className={classes.Icon1}/>
                        <p className={classes.Info_Text}>Git Hub</p>
                    </div>
                </div>
            </div>
            <button onClick={descargarContacto} className={classes.Button_Contact}>
                <PersonAddIcon className={classes.Dowload} />
            </button>
        </div>
    )
}