
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
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = `${timestamp}-${name.replace(/\s+/g, '_')}.txt`;
    const filePath = path.join(messagesDir, filename);
    const fileContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    await fs.writeFile(filePath, fileContent);

    return { success: true, message: 'Message received. Thank you!' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Failed to save message.' };
  }
}
