"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="">
      <h1 className="font-bold text-3xl sm:text-center pt-20 mb-8 sm:mb-12">Contact Me</h1>
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <h1 className="font-bold text-2xl">Get in Touch Today!</h1>
          <p className="my-4">
            Have a question, project idea, or just want to say hello? Feel free to reach out. I typically respond within 2 hours.
          </p>
          <div className="socials flex flex-col gap-2 w-fit">
            <a href="tel:+254794566102"><span><FaPhoneAlt /></span> +254 794566102</a>
            <Link href="https://github.com/Judiciousmurich" target="_blank">
              <span><FaGithub /></span> GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/judith-muthui-16b535263/" target="_blank">
              <span><FaLinkedinIn /></span> LinkedIn
            </Link>
            <Link href="https://wa.me/+254794566102" target="_blank">
              <span><FaWhatsapp /></span> WhatsApp
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2">
          <form
            className="w-full"
            action="https://formsubmit.co/murichjudicious45@gmail.com"
            method="post"
          >
            <div>
              <input
                className="w-full rounded-lg p-4 bg-transparent border"
                type="email"
                placeholder="youremail@email.com"
                name="email"
              />
            </div>
            <div className="my-4">
              <textarea
                className="w-full rounded-lg p-4 bg-transparent border"
                name="message"
                id=""
                cols={30}
                rows={5}
                placeholder="Message Here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="send-btn py-2 px-4 rounded-[5px] w-1/4"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
