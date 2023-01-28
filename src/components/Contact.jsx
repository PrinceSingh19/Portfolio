import React, { useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Socials from "./Socials";

const Contact = () => {
	const inputRef = useRef({});
	const reset = () => {
		inputRef.current["name"].value = "";
		inputRef.current["email"].value = "";
		inputRef.current["subject"].value = "";
		inputRef.current["message"].value = "";
	};
	const handleSubmit = (e) => {
		if (e.keycode == 8) {
			return;
		}
		e.preventDefault();
		const name = inputRef.current["name"].value;
		const email = inputRef.current["email"].value;
		const subject = inputRef.current["subject"].value;
		const message = inputRef.current["message"].value;
		console.log(name, email, subject, message);
		reset();
	};

	return (
		<div id="contact" className="w-3/4 mx-auto mt-20 md:mt-40">
			<hr className="text-textColor w-1/2" />

			<h1 className="text-slate-300 text-2xl mt-2">Contact me</h1>
			<div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:grid-cols-3 mt-4">
				<div className="contact">
					<FaLocationArrow className="text-3xl fill-blue-400" />
					<h3 className="md:text-lg">Mumbai, Maharashtra</h3>
				</div>
				<div className="contact">
					<a href="mailto:princesingh808087@gmail.com" className="md:text-lg contact">
						<HiOutlineMail className="text-3xl" />
						princesingh808087@gmail.com
					</a>
				</div>
				<div className="contact">
					<a href="tel:9373122796" className="contact">
						<BsFillTelephoneFill className="text-3xl" />
						9373122796
					</a>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-8 items-center">
				<div>
					<h3 className="text-lg mb-2">Drop me a mail</h3>
					<form className="flex flex-col gap-y-4 md:w-1/2" onSubmit={handleSubmit}>
						<input
							type="text"
							ref={(el) => (inputRef.current["name"] = el)}
							name="name"
							placeholder="Name"
							className="inputs h-8 md:h-10 "
						/>
						<input
							type="email"
							ref={(el) => (inputRef.current["email"] = el)}
							name="email"
							placeholder="Email"
							className="inputs h-8 md:h-10"
						/>
						<input
							type="text"
							ref={(el) => (inputRef.current["subject"] = el)}
							name="subject"
							placeholder="Subject"
							className="inputs h-8 md:h-10"
						/>
						<textarea
							type="text"
							rows="4"
							placeholder="Message"
							ref={(el) => (inputRef.current["message"] = el)}
							className="inputs h-20"
						/>
						<button
							type="submit"
							className="text-lg font-semibold px-4 py-1 md:py-2 bg-slate-700 rounded-sm hover:bg-slate-800 border-2 border-neon"
						>
							Submit
						</button>
					</form>
					<div className="mt-4">
						<h3>Or contact via socials</h3>
						<ul className="w-1/4">
							<Socials />
						</ul>
					</div>
				</div>
				<div className="hidden md:block">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.479180335441!2d72.81468081439603!3d19.434896486883034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9a7633b4223%3A0x43a05328d9dd4463!2sAvdhut%20Apartment!5e0!3m2!1sen!2sin!4v1674808968371!5m2!1sen!2sin"
						className="h-[300px] w-[400px]"
						style={{ border: "0" }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>

			<div className="flex gap-x-2 mb-2 md:justify-center items-center">
				<h1 className="font-bold">Prince Singh</h1>
				<p>&#169; {new Date().getFullYear()}</p>
				<p>All rights reserved</p>
			</div>
		</div>
	);
};

export default Contact;