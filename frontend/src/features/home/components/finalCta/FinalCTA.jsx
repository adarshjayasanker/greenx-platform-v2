import { Section } from "@/components/ui/section";
import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { finalCta } from "./config/final-cta.config";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { LinkButton } from "@/components/ui/button";
import { AnchorButton } from "@/components/ui/button";

const FinalCTA = () => {
    return(
        <Section>
            <Container>
                <div className="overflow-hidden rounded-3xl bg-var(--color-primary) px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-20">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
                        <Badge variant="neutral">{finalCta.badge}</Badge>
                        <Heading level={2}>{finalCta.title}</Heading>
                        <Text className="max-w-2xl">{finalCta.description}</Text>
                        <div className="mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                            <LinkButton to={finalCta.primaryAction.to} variant="secondary">{finalCta.primaryAction.label}</LinkButton>
                            <AnchorButton href={finalCta.secondaryAction.href} variant="outline">{finalCta.secondaryAction.label}</AnchorButton>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
};

export default FinalCTA;