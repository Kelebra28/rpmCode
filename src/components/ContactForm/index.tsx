import React, { useState } from 'react';

import * as classes from './style.module.css';

interface ContactFormProps {
    data: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [message, setMessage] = useState('');

    const handleCancelClick = () => {
        // Clear all input fields by setting the state variables to empty strings
        setName('');
        setEmail('');
        setContactNo('');
        setMessage('');
    };
    return (
        <div className={classes.background}>
            <div className={classes.container}>
                <div className={classes.screen}>
                    <div className={classes.screenHeader}>
                        <div className={classes.screenHeaderLeft}>
                            <div className={`${classes.screenHeaderButton} ${classes.close}`}></div>
                            <div className={`${classes.screenHeaderButton} ${classes.maximize}`}></div>
                            <div className={`${classes.screenHeaderButton} ${classes.minimize}`}></div>
                        </div>
                        <div className={classes.screenHeaderRight}>
                            <div className={classes.screenHeaderEllipsis}></div>
                            <div className={classes.screenHeaderEllipsis}></div>
                            <div className={classes.screenHeaderEllipsis}></div>
                        </div>
                    </div>
                    <div className={classes.screenBody}>
                        <div className={`${classes.screenBodyItem} ${classes.left}`}>
                            <div className={classes.contactTitle}>
                                <span>CONTACTA</span>
                                <span>NOS</span>
                            </div>
                            <div className={classes.contactContact}>
                                INFORMACIÓN DE CONTACTO: <br />
                                <div className={`${classes.ContactDetails} ${classes.contactContact}`}>
                                    <u>
                                        <a className={classes.contactContact} href={`mailto:${data.email}`}>{data.email}</a>
                                    </u>
                                </div>

                            </div>
                        </div>
                        <div className={classes.screenBodyItem}>
                            <div className={classes.contactForm}>
                                <div className={classes.contactFormGroup}>
                                    <input
                                        className={classes.contactFormControl}
                                        placeholder="NOMBRE"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className={classes.contactFormGroup}>
                                    <input
                                        className={classes.contactFormControl}
                                        placeholder="CORREO ELECTRÓNICO"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className={classes.contactFormGroup}>
                                    <input
                                        className={classes.contactFormControl}
                                        placeholder="TELÉFONO DE CONTACTO"
                                        value={contactNo}
                                        onChange={(e) => setContactNo(e.target.value)}
                                    />
                                </div>
                                <div className={`${classes.contactFormGroup} ${classes.message}`}>
                                    <input
                                        className={classes.contactFormControl}
                                        placeholder="MENSAJE"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className={`${classes.contactFormGroup} ${classes.buttons}`}>
                                    <button onClick={handleCancelClick}
                                        className={classes.contactFormButton}>CANCELAR</button>
                                    <button className={classes.contactFormButton}>ENVIAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.credits}>
                    Inspirado por RPM CODE
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
