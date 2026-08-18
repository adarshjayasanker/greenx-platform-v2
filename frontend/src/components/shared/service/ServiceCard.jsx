import {Card} from '@/components/ui/card';
import IconBadge from '@/components/ui/iconBadge';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import { Link } from 'react-router-dom';

const ServiceCard = ({service, href}) => {

    const {
        icon: Icon,
        title,
        description,
    } = service;

    const content = (
        <Card className="h-full transition-shadow duration-300 group-hover:shadow-md">
            <div className='flex h-full flex-col'>
                {Icon && (
                    <IconBadge>
                        <Icon size={28}/>
                    </IconBadge>
                )}
                <div className='mt-6'>
                    <Heading level={3}>{title}</Heading>
                    <Text variant="body" className="mt-3">{description}</Text>
                </div>
            </div>
        </Card>
    );

    if(!href){
        return content;
    }

    return(
        <Link to={href} className='group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2'>{content}</Link>
    )
};

export default ServiceCard;