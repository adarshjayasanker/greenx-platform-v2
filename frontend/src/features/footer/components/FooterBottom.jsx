import Container from "../../../components/ui/container";

const FooterBottom = () => {
    const currentYear = new Date().getFullYear();
    return(
        <section>
            <Container>
                <p>
                    © {currentYear} Greenx Pest Control. All rights reserved.
                </p>
            </Container>
        </section>
    )
};

export default FooterBottom;