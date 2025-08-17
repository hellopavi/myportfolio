
'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

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
  const messagesDir = path.join(process.cwd(), 'public', 'messages');
  
  try {
    await fs.mkdir(messagesDir, { recursive: true });
    
    // Create a date object for IST (UTC+5:30)
    const now = new Date();
    const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

    const day = String(istDate.getDate()).padStart(2, '0');
    const month = String(istDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = istDate.getFullYear();
    
    let hour = istDate.getHours();
    const minute = String(istDate.getMinutes()).padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    const hourStr = String(hour).padStart(2, '0');

    const dateString = `${day}-${month}-${year}`;
    const timeString = `${hourStr}-${minute}-${ampm}`;

    const filename = `Name-${name.replace(/\s+/g, '_')}_${dateString}_IST_${timeString}.txt`;
    const filePath = path.join(messagesDir, filename);
    const fileContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    await fs.writeFile(filePath, fileContent);

    return { success: true, message: 'Message received. Thank you!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to save message.' };
  }
}
