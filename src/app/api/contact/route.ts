import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = contactSchema.parse(body);

        // TODO: Save to database (Prisma)
        // const submission = await prisma.contactSubmission.create({
        //   data: validatedData,
        // });

        // TODO: Send email notification
        // await sendContactEmail(validatedData);

        // For now, just log it (we'll add database later)
        console.log('Contact form submission:', validatedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.',
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    errors: error.issues,
                },
                { status: 400 }
            );
        }

        console.error('Contact form error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong. Please try again later.',
            },
            { status: 500 }
        );
    }
}
