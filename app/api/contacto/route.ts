import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {

    const { nombre, email, asunto, mensaje } = await req.json();

    if (!nombre || !email || !mensaje) {
      return Response.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "ZonaWeb <onboarding@resend.dev>",
      to: ["marco_95_5@yahoo.com"],
      subject: asunto || "Nuevo mensaje desde ZonaWeb",
      html: `
        <h2>Nuevo mensaje desde ZonaWeb</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto || "Consulta"}</p>

        <hr>

        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    console.error("Error enviando email:", error);

    return Response.json(
      { error: "Error enviando el mensaje" },
      { status: 500 }
    );

  }
}