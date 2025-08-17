
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the form fields.',
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;
  const toEmail = "Pavithranofficial1@gmail.com";

  console.log(`Sending email to ${toEmail}`);
  console.log(`From: ${name} <${email}>`);
  console.log(`Message: ${message}`);
  
  // Here you would integrate with an email sending service like Resend, Nodemailer, etc.
  // For this example, we'll simulate a successful email dispatch.
  try {
    // const sent = await sendEmail({ to: toEmail, from: email, subject: `Message from ${name}`, html: message });
    // if(!sent) throw new Error("Email failed to send.");

    return { success: true, message: 'Message sent to Pavithran' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to send message.' };
  }
}
