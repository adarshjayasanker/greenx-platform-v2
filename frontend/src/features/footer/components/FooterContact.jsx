const FooterContact = ({contacts}) => {
    return(
        <section aria-labelledby="footer-contact-heading">
            <h3 id="footer-contact-heading" className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-5 space-y-4">
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p className="text-xs font-medium text-neutral-500">{contact.label}</p>
                        {contact.href ? (
                            <a href={contact.href} className="mt-1 inline-block text-sm text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">{contact.value}</a>
                        ) : (
                            <span className="mt-1 block text-sm text-neutral-300">{contact.value}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default FooterContact;