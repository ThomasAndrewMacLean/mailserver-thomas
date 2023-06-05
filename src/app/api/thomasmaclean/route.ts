import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(req: Request) {
  const res = await req.json(); // res now contains body
  const email = res.email;
  const contactText = res.contactText;

  const msg = {
    to: "thomas.maclean@gmail.com", // Change to your recipient
    from: "hello@thomasmaclean.be", // Change to your verified sender
    subject: "Contact form submission from thomasmaclean.be",
    text: email + " says: " + contactText,
  };
  const x = await sgMail.send(msg);

  console.log(x);
  return NextResponse.json(res);
}
