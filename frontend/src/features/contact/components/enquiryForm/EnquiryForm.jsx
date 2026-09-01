import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Select from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import { services } from "../../../../data/services";

import { contactPage } from "../../config/contact-page.config";
import { useState } from "react";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
}

const EnquiryForm = () => {

    const {title, description, submitLabel} = contactPage.form;

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
        setErrors((current) => ({
            ...current,
            [name]: ""
        }))
    }

    const validateForm = () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = "Please enter your name."
        }
        if(!formData.phone.trim()){
            newErrors.phone = "Please enter your phone number."
        }
        if(!formData.email.trim()){
            newErrors.email = "Please enter your email address";
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if(!formData.service){
            newErrors.service = "Please select a service."
        }
        if(!formData.message.trim()){
            newErrors.message = "Please tell us how we can help."
        }
        return newErrors;
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(isSubmitting){
            return;
        }
        const validationErrors = validateForm();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setSubmitStatus(null);
        setIsSubmitting(true);
        try{
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Validated form data:", formData);
            setSubmitStatus("success");
            setFormData(initialFormData);
        }catch(error){
            console.error("Enquiry submission failed:", error);
            setSubmitStatus("error");            
        }finally{
            setIsSubmitting(false);
        }
    }

    return(
        <div className="rounded-2xl border border-(--color-border) bg-(--color-background) p-6 sm:p-8">
            <Heading level={2}>{title}</Heading>
            <Text className="mt-3">{description}</Text>
            {submitStatus === "success" && (
                <div role="status" className="mt-6 rounded-xl border border-(--color-success)/20 bg-(--color-success)/10 p-4 text-sm text-(--color-text-primary)">Your enquiry has been recieved. We'll get back to you soon.</div>
            )}
            {submitStatus === "error" && (
                <div role="alert" className="mt-6 rounded-xl border border-(--color-error)/20 bg-(--color-error)/10 p-4 text-sm text-(--color-text-primary)">We couldn't submit your enquiry right now. Please try again.</div>
            )}
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <Input label="Name" name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} error={errors.name}/>
                <Input label="Phone" name="phone" type="tel" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone}/>
                <Input label="Email" name="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleChange} error={errors.email}/>
                <Select label="Service" name="service" value={formData.service} onChange={handleChange} error={errors.service}>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                </Select>
                <Textarea label="Message" name="message" placeholder="Tell us briefly how we can help." rows={5} value={formData.message} onChange={handleChange} error={errors.message}/>
                <Button type="submit" fullWidth loading={isSubmitting}>{submitLabel}</Button>
            </form>
        </div>
    )
};

export default EnquiryForm;