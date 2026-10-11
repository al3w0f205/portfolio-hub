import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    // Aquí puedes conectar Resend, Sendgrid, Discord Webhook o Telegram Bot
    console.log('[Nuevo mensaje de contacto recibido]:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: '¡Mensaje recibido con éxito! Me pondré en contacto contigo a la brevedad.',
    });
  } catch (error) {
    console.error('Error en ruta de contacto:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al procesar el mensaje.' },
      { status: 500 }
    );
  }
}
