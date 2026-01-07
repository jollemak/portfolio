import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

   
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "contact@joel-portfolio-omega-dusky.vercel.app",
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Placeholder: log the data (remove in production)
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
