import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Notification from "../components/Notification";
import Squares from "../components/Squares";

function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          //console.log(result.text);
          setSending(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          setSending(false);
          //console.log(error.text);
        }
      );
  };
  return (
    <>
      {sent && <Notification />}
      <div className="relative min-h-[60vh] text-white">
        <h2 className="text-xl font-medium md:text-2xl">Contact</h2>
        <p className="mt-2 text-sm opacity-70 md:w-72">
          Get a job or want to hire me. Send me a message
        </p>
        <form
          className="mt-5 md:max-w-[500px]"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="block text-sm">
            Name
            <input
              type="text"
              name="name"
              id="name"
              required
              className="block w-full p-3 mt-3 mb-4 rounded-md outline-none bg-white/30"
            />
          </label>
          <label htmlFor="email" className="block text-sm">
            Email
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full p-3 mt-3 mb-4 rounded-md outline-none bg-white/30"
            />
          </label>
          <label htmlFor="message" className="block text-sm">
            Message
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
              className="block w-full p-3 mt-3 mb-4 rounded-md outline-none bg-white/30"
            ></textarea>
          </label>
          <button
            disabled={sending}
            className="px-8 py-3 mt-3 text-sm font-medium rounded-md w-fill bg-accent active:scale-125"
            style={{ opacity: sending ? ".5" : "1" }}
          >
            {sending ? "sending" : "Send"}
          </button>
        </form>
        <Squares />
      </div>
    </>
  );
}

export default Contact;
