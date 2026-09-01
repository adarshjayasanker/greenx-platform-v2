
const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return(
        <section>
                <p className="text-sm text-neutral-500">
                    © {currentYear} Greenx Pest Control. All rights reserved.
                </p>
        </section>
    )
};

export default FooterBottom;