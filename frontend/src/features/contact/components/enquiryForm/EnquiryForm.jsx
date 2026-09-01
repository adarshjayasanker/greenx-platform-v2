import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {Button} from "@/components/ui/button";
import { services } from "../../../../data/services";
import {Input, Select, Textarea} from '@/components/ui/form';

import { contactPage } from "../../config/contact-page.config";
import { useState } from "react";
import { Field } from "@/components/ui/form";

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
                <div role="status" className="mt-6 rounded-xl border border-(--color-success)/20 bg-(--color-success)/10 p-4 text-sm text-(--color-text-primary)">Your enquiry has been received. We'll get back to you soon.</div>
            )}
            {submitStatus === "error" && (
                <div role="alert" className="mt-6 rounded-xl border border-(--color-error)/20 bg-(--color-error)/10 p-4 text-sm text-(--color-text-primary)">We couldn't submit your enquiry right now. Please try again.</div>
            )}
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full Name" required error={errors.name}>
                        <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-message" : undefined} placeholder="Enter your name" autoComplete="name" />
                    </Field>
                    <Field id="phone" label="Phone Number" required error={errors.phone}>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-message" : undefined} placeholder="Enter your phone number" autoComplete="tel" />
                    </Field>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="Email Address" required error={errors.email}>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-message" : undefined} placeholder="Enter your email address" autoComplete="email" />
                    </Field>
                    <Field id="service" label="Service" required error={errors.service}>
                        <Select id="service" name="service" value={formData.service} onChange={handleChange} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-message" : undefined} error={errors.service}>
                            <option value="" disabled>Select a service</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>{service.title}</option>
                            ))}
                        </Select>
                    </Field>
                </div>
                <Field id="message" label="Message" required error={errors.message}>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-message" : undefined} placeholder="Tell us briefly how we can help." error={errors.message}/>
                </Field>
                <Button type="submit" fullWidth loading={isSubmitting}>{submitLabel}</Button>
            </form>
        </div>
    )
};

export default EnquiryForm;