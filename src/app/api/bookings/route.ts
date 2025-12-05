import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const bookingSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    destination: z.string().min(1, 'Destination is required'),
    tourName: z.string().optional(),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().optional(),
    numberOfGuests: z.number().min(1, 'At least 1 guest is required').max(20),
    specialRequests: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = bookingSchema.parse(body);

        // TODO: Save to database (Prisma)
        // const booking = await prisma.booking.create({
        //   data: {
        //     ...validatedData,
        //     startDate: new Date(validatedData.startDate),
        //     endDate: validatedData.endDate ? new Date(validatedData.endDate) : undefined,
        //   },
        // });

        // TODO: Send confirmation email
        // await sendBookingConfirmationEmail(validatedData);

        // For now, just log it
        console.log('Booking submission:', validatedData);

        return NextResponse.json(
            {
                success: true,
                message: 'Your booking has been received! We will contact you shortly to confirm.',
                bookingId: `TEMP-${Date.now()}`, // Temporary ID
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

        console.error('Booking error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Something went wrong. Please try again later.',
            },
            { status: 500 }
        );
    }
}

// Get all bookings (admin only - add auth later)
export async function GET(request: Request) {
    // TODO: Add authentication check

    try {
        // TODO: Fetch from database
        // const bookings = await prisma.booking.findMany({
        //   orderBy: { createdAt: 'desc' },
        // });

        return NextResponse.json({
            success: true,
            bookings: [],
        });
    } catch (error) {
        console.error('Get bookings error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch bookings',
            },
            { status: 500 }
        );
    }
}
