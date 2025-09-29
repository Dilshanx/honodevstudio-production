// // import { NextRequest, NextResponse } from 'next/server';
// // import { Resend } from 'resend';
// // import { serverContactSchema } from '@/lib/validations/contact';
// // import { z } from 'zod';

// // // Initialize Resend with API key
// // const resend = new Resend(process.env.RESEND_API_KEY);

// // // Rate limiting store (in production, use Redis or similar)
// // const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// // // Rate limiting function
// // function checkRateLimit(ip: string): boolean {
// //   const now = Date.now();
// //   const windowMs = 15 * 60 * 1000; // 15 minutes
// //   const maxRequests = 5; // Max 5 requests per 15 minutes

// //   const record = rateLimitStore.get(ip);

// //   if (!record || now > record.resetTime) {
// //     rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
// //     return true;
// //   }

// //   if (record.count >= maxRequests) {
// //     return false;
// //   }

// //   record.count++;
// //   return true;
// // }

// // // Email template
// // function createEmailTemplate(data: any) {
// //   return `
// //     <!DOCTYPE html>
// //     <html>
// //     <head>
// //       <meta charset="utf-8">
// //       <title>New Contact Form Submission</title>
// //       <style>
// //         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
// //         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
// //         .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
// //         .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
// //         .field { margin-bottom: 15px; }
// //         .label { font-weight: bold; color: #555; }
// //         .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
// //         .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
// //       </style>
// //     </head>
// //     <body>
// //       <div class="container">
// //         <div class="header">
// //           <h2>New Contact Form Submission</h2>
// //           <p>You have received a new message from your website contact form.</p>
// //         </div>
// //         <div class="content">
// //           <div class="field">
// //             <div class="label">Name:</div>
// //             <div class="value">${data.name}</div>
// //           </div>
// //           <div class="field">
// //             <div class="label">Email:</div>
// //             <div class="value">${data.email}</div>
// //           </div>
// //           ${data.company ? `
// //           <div class="field">
// //             <div class="label">Company:</div>
// //             <div class="value">${data.company}</div>
// //           </div>
// //           ` : ''}
// //           ${data.phone ? `
// //           <div class="field">
// //             <div class="label">Phone:</div>
// //             <div class="value">${data.phone}</div>
// //           </div>
// //           ` : ''}
// //           <div class="field">
// //             <div class="label">Subject:</div>
// //             <div class="value">${data.subject}</div>
// //           </div>
// //           <div class="field">
// //             <div class="label">Message:</div>
// //             <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
// //           </div>
// //           <div class="footer">
// //             <p>This message was sent from the contact form on your website.</p>
// //             <p>Timestamp: ${new Date().toLocaleString()}</p>
// //           </div>
// //         </div>
// //       </div>
// //     </body>
// //     </html>
// //   `;
// // }

// // export async function POST(request: NextRequest) {
// //   try {
// //     // Get client IP for rate limiting
// //     const ip = request.headers.get('x-forwarded-for') ||
// //                request.headers.get('x-real-ip') ||
// //                'unknown';

// //     // Check rate limit
// //     if (!checkRateLimit(ip)) {
// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: 'Too many requests. Please try again later.'
// //         },
// //         { status: 429 }
// //       );
// //     }

// //     // Parse request body
// //     const body = await request.json();

// //     // Validate data with server schema
// //     const validationResult = serverContactSchema.safeParse(body);

// //     if (!validationResult.success) {
// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: 'Invalid form data',
// //           details: validationResult.error.errors
// //         },
// //         { status: 400 }
// //       );
// //     }

// //     const data = validationResult.data;

// //     // Check honeypot field (should be empty)
// //     if (data.honeypot && data.honeypot.length > 0) {
// //       return NextResponse.json(
// //         { success: false, error: 'Spam detected' },
// //         { status: 400 }
// //       );
// //     }

// //     // Check if Resend API key is configured
// //     if (!process.env.RESEND_API_KEY) {
// //       console.error('RESEND_API_KEY is not configured');
// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: 'Email service is not configured. Please try again later.'
// //         },
// //         { status: 500 }
// //       );
// //     }

// //     // Send email using Resend
// //     const emailResult = await resend.emails.send({
// //       from: 'Contact Form <noreply@honodev.studio>',
// //       to: ['hello@honodev.studio'], // Replace with your actual email
// //       replyTo: data.email,
// //       subject: `New Contact: ${data.subject}`,
// //       html: createEmailTemplate(data),
// //       text: `
// //         New contact form submission:

// //         Name: ${data.name}
// //         Email: ${data.email}
// //         ${data.company ? `Company: ${data.company}` : ''}
// //         ${data.phone ? `Phone: ${data.phone}` : ''}
// //         Subject: ${data.subject}

// //         Message:
// //         ${data.message}

// //         Sent at: ${new Date().toLocaleString()}
// //       `,
// //     });

// //     if (emailResult.error) {
// //       console.error('Resend error:', emailResult.error);
// //       return NextResponse.json(
// //         {
// //           success: false,
// //           error: 'Failed to send email. Please try again later.'
// //         },
// //         { status: 500 }
// //       );
// //     }

// //     // Send auto-reply to user
// //     try {
// //       await resend.emails.send({
// //         from: 'Hono Dev Studio <noreply@honodev.studio>',
// //         to: [data.email],
// //         subject: 'Thank you for contacting Hono Dev Studio',
// //         html: `
// //           <!DOCTYPE html>
// //           <html>
// //           <head>
// //             <meta charset="utf-8">
// //             <title>Thank you for your message</title>
// //             <style>
// //               body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
// //               .container { max-width: 600px; margin: 0 auto; padding: 20px; }
// //               .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
// //               .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
// //               .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
// //             </style>
// //           </head>
// //           <body>
// //             <div class="container">
// //               <div class="header">
// //                 <h2>Thank You, ${data.name}!</h2>
// //               </div>
// //               <div class="content">
// //                 <p>Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.</p>

// //                 <p><strong>Your message details:</strong></p>
// //                 <p><strong>Subject:</strong> ${data.subject}</p>
// //                 <p><strong>Message:</strong> ${data.message}</p>

// //                 <p>We appreciate your interest in our services and look forward to discussing your project with you.</p>

// //                 <p>Best regards,<br>
// //                 The Hono Dev Studio Team</p>
// //               </div>
// //               <div class="footer">
// //                 <p>This is an automated response. Please do not reply to this email.</p>
// //                 <p>If you need immediate assistance, please call us at +1 (415) 555-0123</p>
// //               </div>
// //             </div>
// //           </body>
// //           </html>
// //         `,
// //         text: `
// //           Thank you, ${data.name}!

// //           Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.

// //           Your message details:
// //           Subject: ${data.subject}
// //           Message: ${data.message}

// //           We appreciate your interest in our services and look forward to discussing your project with you.

// //           Best regards,
// //           The Hono Dev Studio Team

// //           ---
// //           This is an automated response. Please do not reply to this email.
// //           If you need immediate assistance, please call us at +1 (415) 555-0123
// //         `,
// //       });
// //     } catch (autoReplyError) {
// //       // Auto-reply failure shouldn't fail the main request
// //       console.warn('Auto-reply failed:', autoReplyError);
// //     }

// //     return NextResponse.json({
// //       success: true,
// //       message: 'Message sent successfully! We will get back to you soon.',
// //       id: emailResult.data?.id
// //     });

// //   } catch (error) {
// //     console.error('Contact form error:', error);
// //     return NextResponse.json(
// //       {
// //         success: false,
// //         error: 'An unexpected error occurred. Please try again later.'
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }

// // // Handle other HTTP methods
// // export async function GET() {
// //   return NextResponse.json(
// //     { error: 'Method not allowed' },
// //     { status: 405 }
// //   );
// // }

// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { serverContactSchema } from "@/lib/validations/contact";
// import { z } from "zod";

// // Initialize Resend with API key
// const resend = new Resend(process.env.RESEND_API_KEY);

// // Rate limiting store (in production, use Redis or similar)
// const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// // Rate limiting function
// function checkRateLimit(ip: string): boolean {
//   const now = Date.now();
//   const windowMs = 15 * 60 * 1000; // 15 minutes
//   const maxRequests = 5; // Max 5 requests per 15 minutes

//   const record = rateLimitStore.get(ip);

//   if (!record || now > record.resetTime) {
//     rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
//     return true;
//   }

//   if (record.count >= maxRequests) {
//     return false;
//   }

//   record.count++;
//   return true;
// }

// // Email template
// function createEmailTemplate(data: z.infer<typeof serverContactSchema>) {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <meta charset="utf-8">
//       <title>New Contact Form Submission</title>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//         .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//         .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
//         .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
//         .field { margin-bottom: 15px; }
//         .label { font-weight: bold; color: #555; }
//         .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
//         .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h2>New Contact Form Submission</h2>
//           <p>You have received a new message from your website contact form.</p>
//         </div>
//         <div class="content">
//           <div class="field">
//             <div class="label">Name:</div>
//             <div class="value">${data.name}</div>
//           </div>
//           <div class="field">
//             <div class="label">Email:</div>
//             <div class="value">${data.email}</div>
//           </div>
//           ${
//             data.company
//               ? `
//           <div class="field">
//             <div class="label">Company:</div>
//             <div class="value">${data.company}</div>
//           </div>
//           `
//               : ""
//           }
//           ${
//             data.phone
//               ? `
//           <div class="field">
//             <div class="label">Phone:</div>
//             <div class="value">${data.phone}</div>
//           </div>
//           `
//               : ""
//           }
//           <div class="field">
//             <div class="label">Subject:</div>
//             <div class="value">${data.subject}</div>
//           </div>
//           <div class="field">
//             <div class="label">Message:</div>
//             <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
//           </div>
//           <div class="footer">
//             <p>This message was sent from the contact form on your website.</p>
//             <p>Timestamp: ${new Date().toLocaleString()}</p>
//           </div>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;
// }

// export async function POST(request: NextRequest) {
//   try {
//     // Get client IP for rate limiting
//     const ip =
//       request.headers.get("x-forwarded-for") ||
//       request.headers.get("x-real-ip") ||
//       "unknown";

//     // Check rate limit
//     if (!checkRateLimit(ip)) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Too many requests. Please try again later.",
//         },
//         { status: 429 }
//       );
//     }

//     // Parse request body
//     const body = await request.json();

//     // Validate data with server schema
//     const validationResult = serverContactSchema.safeParse(body);

//     if (!validationResult.success) {
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Invalid form data",
//           details: validationResult.error.issues,
//         },
//         { status: 400 }
//       );
//     }

//     const data = validationResult.data;

//     // Check honeypot field (should be empty)
//     if (data.honeypot && data.honeypot.length > 0) {
//       return NextResponse.json(
//         { success: false, error: "Spam detected" },
//         { status: 400 }
//       );
//     }

//     // Check if Resend API key is configured
//     if (!process.env.RESEND_API_KEY) {
//       console.error("RESEND_API_KEY is not configured");
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Email service is not configured. Please try again later.",
//         },
//         { status: 500 }
//       );
//     }

//     // Send email using Resend
//     const emailResult = await resend.emails.send({
//       from: "Contact Form <noreply@honodev.studio>",
//       to: ["hello@honodev.studio"], // Replace with your actual email
//       replyTo: data.email,
//       subject: `New Contact: ${data.subject}`,
//       html: createEmailTemplate(data),
//       text: `
//         New contact form submission:

//         Name: ${data.name}
//         Email: ${data.email}
//         ${data.company ? `Company: ${data.company}` : ""}
//         ${data.phone ? `Phone: ${data.phone}` : ""}
//         Subject: ${data.subject}

//         Message:
//         ${data.message}

//         Sent at: ${new Date().toLocaleString()}
//       `,
//     });

//     if (emailResult.error) {
//       console.error("Resend error:", emailResult.error);
//       return NextResponse.json(
//         {
//           success: false,
//           error: "Failed to send email. Please try again later.",
//         },
//         { status: 500 }
//       );
//     }

//     // Send auto-reply to user
//     try {
//       await resend.emails.send({
//         from: "Hono Dev Studio <noreply@honodev.studio>",
//         to: [data.email],
//         subject: "Thank you for contacting Hono Dev Studio",
//         html: `
//           <!DOCTYPE html>
//           <html>
//           <head>
//             <meta charset="utf-8">
//             <title>Thank you for your message</title>
//             <style>
//               body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//               .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//               .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
//               .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
//               .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <div class="header">
//                 <h2>Thank You, ${data.name}!</h2>
//               </div>
//               <div class="content">
//                 <p>Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.</p>

//                 <p><strong>Your message details:</strong></p>
//                 <p><strong>Subject:</strong> ${data.subject}</p>
//                 <p><strong>Message:</strong> ${data.message}</p>

//                 <p>We appreciate your interest in our services and look forward to discussing your project with you.</p>

//                 <p>Best regards,<br>
//                 The Hono Dev Studio Team</p>
//               </div>
//               <div class="footer">
//                 <p>This is an automated response. Please do not reply to this email.</p>
//                 <p>If you need immediate assistance, please call us at +1 (415) 555-0123</p>
//               </div>
//             </div>
//           </body>
//           </html>
//         `,
//         text: `
//           Thank you, ${data.name}!

//           Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.

//           Your message details:
//           Subject: ${data.subject}
//           Message: ${data.message}

//           We appreciate your interest in our services and look forward to discussing your project with you.

//           Best regards,
//           The Hono Dev Studio Team

//           ---
//           This is an automated response. Please do not reply to this email.
//           If you need immediate assistance, please call us at +1 (415) 555-0123
//         `,
//       });
//     } catch (autoReplyError) {
//       // Auto-reply failure shouldn't fail the main request
//       console.warn("Auto-reply failed:", autoReplyError);
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Message sent successfully! We will get back to you soon.",
//       id: emailResult.data?.id,
//     });
//   } catch (error) {
//     console.error("Contact form error:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "An unexpected error occurred. Please try again later.",
//       },
//       { status: 500 }
//     );
//   }
// }

// // Handle other HTTP methods
// export async function GET() {
//   return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
// }

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { serverContactSchema } from "@/lib/validations/contact";
import { z } from "zod";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

// Email template
function createEmailTemplate(data: z.infer<typeof serverContactSchema>) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #667eea; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p>You have received a new message from your website contact form.</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          ${
            data.company
              ? `
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${data.company}</div>
          </div>
          `
              : ""
          }
          ${
            data.phone
              ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
          <div class="footer">
            <p>This message was sent from the contact form on your website.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate data with server schema
    const validationResult = serverContactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check honeypot field (should be empty)
    if (data.honeypot && data.honeypot.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam detected" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send email using Resend - FIXED: Using verified domain
    const emailResult = await resend.emails.send({
      from: "Contact Form <noreply@honodevstudio.com>", // Fixed domain
      to: ["dilshanjayatissa@gmail.com"], // Fixed domain - replace with your actual email
      replyTo: data.email,
      subject: `New Contact: ${data.subject}`,
      html: createEmailTemplate(data),
      text: `
        New contact form submission:
        
        Name: ${data.name}
        Email: ${data.email}
        ${data.company ? `Company: ${data.company}` : ""}
        ${data.phone ? `Phone: ${data.phone}` : ""}
        Subject: ${data.subject}
        
        Message:
        ${data.message}
        
        Sent at: ${new Date().toLocaleString()}
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send auto-reply to user - FIXED: Using verified domain
    try {
      await resend.emails.send({
        from: "Hono Dev Studio <noreply@honodevstudio.com>", // Fixed domain
        to: [data.email],
        subject: "Thank you for contacting Hono Dev Studio",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Thank you for your message</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Thank You, ${data.name}!</h2>
              </div>
              <div class="content">
                <p>Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.</p>
                
                <p><strong>Your message details:</strong></p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong> ${data.message}</p>
                
                <p>We appreciate your interest in our services and look forward to discussing your project with you.</p>
                
                <p>Best regards,<br>
                The Hono Dev Studio Team</p>
              </div>
              <div class="footer">
                <p>This is an automated response. Please do not reply to this email.</p>
                <p>If you need immediate assistance, please call us at +1 (415) 555-0123</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
          Thank you, ${data.name}!
          
          Thank you for reaching out to Hono Dev Studio. We have received your message and will get back to you within 24 hours.
          
          Your message details:
          Subject: ${data.subject}
          Message: ${data.message}
          
          We appreciate your interest in our services and look forward to discussing your project with you.
          
          Best regards,
          The Hono Dev Studio Team
          
          ---
          This is an automated response. Please do not reply to this email.
          If you need immediate assistance, please call us at +1 (415) 555-0123
        `,
      });
    } catch (autoReplyError) {
      // Auto-reply failure shouldn't fail the main request
      console.warn("Auto-reply failed:", autoReplyError);
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
      id: emailResult.data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
