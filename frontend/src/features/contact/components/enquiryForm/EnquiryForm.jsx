import enquiryApi from "../../../../api/enquiry.api";

import {Heading} from "@/components/ui/heading";
import {Text} from "@/components/ui/text";
import {Button} from "@/components/ui/button";
import { services } from "../../../../data/services";
import {Input, Select, Textarea} from '@/components/ui/form';

import { contactPage } from "../../config/contact-page.config";
import { useState } from "react";
import { Field } from "@/components/ui/form";
import apiError from "../../../../utils/api-error";

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

        const name = formData.name.trim();
        const phone = formData.phone.trim();
        const email = formData.email.trim();
        const service = formData.service.trim();
        const message = formData.message.trim();

        if(!name){
            newErrors.name = "Please enter your name.";
        }else if(name.length > 100){
            newErrors.name = "Name must be 100 characters or less.";
        }

        if(!phone){
            newErrors.phone = "Please enter your phone number.";
        }else if(phone.length < 7 || phone.length > 20){
            newErrors.phone = "Phone number must contain between 7 and 20 characters."
        }

        if(!email){
            newErrors.email = "Please enter your email address.";
        }else if(email.length > 254){
            newErrors.email = "Email must be 254 characters or less.";
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            newErrors.email = "Please enter a valid email address."
        }

        if(!service){
            newErrors.service = "Please select a service.";
        }else if(service.length > 100){
            newErrors.service = "Service must be 100 characters or less.";
        }

        if(!message){
            newErrors.message = "Please tell us how we can help.";
        }else if(message.length > 2000){
            newErrors.message = "Message must be 2000 characters or less"
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
            await enquiryApi.createEnquiry(formData);
            setSubmitStatus("success");
            setFormData(initialFormData);
            setErrors({});
        }catch(error){
            console.error(error);
            const fieldErrors = apiError.getApiFieldErrors(error);
            const {body, ...formFieldErrors} = fieldErrors;
            setErrors(formFieldErrors);
            setSubmitStatus({
                type: "error",
                message: body || apiError.getApiErrorMessage(error),
            });            
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
            {submitStatus?.type === "error" && (
                <div role="alert" className="mt-6 rounded-xl border border-(--color-error)/20 bg-(--color-error)/10 p-4 text-sm text-(--color-text-primary)">{submitStatus.message}</div>
            )}
            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
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
                        <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-message" : undefined} placeholder="Enter your email address" autoComplete="email" />
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