"use client";
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  function myModal() {
    document.getElementById("my_modal_2").showModal();
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      myModal();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-68px)]">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-start bg-base-300 my-8 border border-primary p-6 rounded-lg shadow-lg w-[95vw] max-w-screen-md mx-4"
        >
          <label htmlFor="fullName" className="">
            Full Name&#58;
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="type your full name ..."
            required
            className="input input-bordered input-primary w-[99%] mb-4"
          />
          <label htmlFor="email" className="">
            Email Address&#58;
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="type your email address ..."
            required
            className="input input-bordered input-primary w-[99%] mb-4"
          />
          <label htmlFor="message" className="">
            Message&#58;
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="type your message ..."
            required
            className="textarea textarea-primary textarea-lg w-[99%] mb-4"
          />
          <button type="submit" className="btn btn-primary btn-sm ">
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
        </form>
        {/* <button className="btn" onClick={myModal}>
          open modal
        </button> */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-semibold text-lg">
              Message sent succesfully&#33;
            </h3>
            {/* <p className="py-4">Press ESC key or click outside to close</p> */}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}
