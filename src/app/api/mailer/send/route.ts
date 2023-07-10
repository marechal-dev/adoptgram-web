import { NextRequest, NextResponse } from 'next/server';

import { z } from 'zod';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

if (!process.env.RESEND_API_KEY) {
  throw new Error('No Resend API Key available.');
}

const RESEND_API_ENDPOINT = 'https://api.resend.com/emails';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const DOMAIN = "adoptgram.dev";
const SENDER = `mailer@${DOMAIN}`;

const createEmailRequestBodyValidator = z.object({
  to: z.string().email('Please provide a valid Email.'),
  subject: z.string(),
  textContent: z.string(),
});

export async function POST(request: NextRequest) {
  const rawRequestBody = await request.json();
  const parsingResult = createEmailRequestBodyValidator.safeParse(rawRequestBody);

  if (!parsingResult.success) {
    return NextResponse.json({
      message: 'Invalid request body.',
      errors: parsingResult.error.format(),
    }, {
      status: 400,
    });
  }

  const emailMetadata = parsingResult.data;

  const resendApiResponse = await fetch(RESEND_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify({
      from: SENDER,
      to: emailMetadata.to,
      subject: emailMetadata.subject,
      html: `<div>${emailMetadata.textContent}</div>`,
    })
  });

  const resendApiResponseBody = await resendApiResponse.json();

  if (!resendApiResponse.ok) {
    return NextResponse.json({
      message: 'Failed to send Email via Resend API',
      resendApiInfo: {
        statusCode: resendApiResponse.status,
        body: resendApiResponseBody,
      },
    }, {
      status: resendApiResponse.status,
    });
  }

  return NextResponse.json(resendApiResponseBody, {
    status: 200,
  });
}
