import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { firstName, lastName, email, company, message } = formData

    console.log('Received contact form submission:', { firstName, lastName, email, company })

    // Validate required fields
    if (!firstName || !email || !message) {
      console.log('Validation failed - missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send to Formspree - USING YOUR ACTUAL FORMSPREE ENDPOINT
    const formspreeResponse = await fetch('https://formspree.io/f/xkgvkbob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email: email,
        company: company || 'Not provided',
        message: message,
        _subject: `New portfolio message from ${firstName} ${lastName}`
      }),
    })

    if (formspreeResponse.ok) {
      console.log('Email sent successfully via Formspree')
      return NextResponse.json(
        { 
          message: 'Thank you for your message! I will get back to you soon.',
          success: true 
        },
        { status: 200 }
      )
    } else {
      console.error('Formspree error:', await formspreeResponse.text())
      throw new Error('Formspree submission failed')
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
