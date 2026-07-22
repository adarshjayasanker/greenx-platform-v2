const FooterContact = ({contacts}) => {
    return(
        <section>
            <h3>Contact</h3>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>{contact.label}</p>
                        {contact.href ? (
                            <a href={contact.href}>{contact.value}</a>
                        ) : (
                            <span>{contact.value}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default FooterContact;