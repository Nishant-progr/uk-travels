import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
    name: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = newsletterSchema.parse(body);

        // TODO: Save to database (Prisma)
        // const subscriber = await prisma.newsletterSubscriber.create({
        //   data: validatedData,
        // });

        // TODO: Send welcome email
        // await sendWelcomeEmail(validatedData.email);

        // For now, just log it
        console.log('Newsletter subscription:', validatedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for subscribing to our newsletter!',
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

        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong. Please try again later.',
            },
            { status: 500 }
        );
    }
}
