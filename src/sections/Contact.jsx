import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const email = "husnianjaved381@gmail.com";
const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      // await emailjs.sendForm(
      //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      //   formRef.current,
      //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      // );
      // Reset form and stop loading
      // setForm({ name: "", email: "", message: "" });
      // href="mailto:someone@example.com"
      // const
      const a = document.createElement("a");
      a.href = `mailto:${email}?subject=${encodeURIComponent(
        form.subject,
      )}&body=${encodeURIComponent(form.message)}`;
      a.click();
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10 flex-col gap-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div> */}

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="subject"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Email Subject"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img
                        src={
                          import.meta.env.BASE_URL + "/images/arrow-down.svg"
                        }
                        alt="arrow"
                      />
                    </div>
                  </div>
                </button>
              </form>
              <div className="flex w-full gap-3 items-center">
                <hr className="w-full" /> OR <hr className="w-full" />
              </div>
              <p>
                💬 Email at:{" "}
                <button onClick={() => navigator.clipboard.writeText(email)}>
                  {email}
                </button>
              </p>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
