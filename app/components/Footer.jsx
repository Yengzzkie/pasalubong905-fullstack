import pasalubong from "@/public/pasalogo.jpg";
import storeFront from "@/public/store.jpg";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${storeFront.src})` }}
    >
      <div className="h-full w-full bg-zinc-900/95 mx-auto p-4 py-6 lg:p-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={pasalubong.src}
                className="h-20 me-3 rounded-full"
                alt="Pasalubong Logo"
              />
              <h1 className="font-bold text-white text-3xl my-6">
                <span className="font-extrabold"> Pasalubong</span>
                <span className="text-red-400">9</span>
                <span className="text-yellow-500">0</span>
                <span className="text-blue-400">5</span>
              </h1>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-bold text-yellow-500">
                STORE SCHEDULE
              </h2>
              <ul className="text-gray-200 text-sm lg:text-base">
                <li className="mb-2">Monday: 10 AM - 7 PM</li>
                <li className="mb-2">Tuesday: 10 AM - 7 PM</li>
                <li className="mb-2">Wednesday: 10 AM - 7 PM</li>
                <li className="mb-2">Thursday: 10 AM - 7 PM</li>
                <li className="mb-2">Friday: 10 AM - 7 PM</li>
                <li className="mb-2">Saturday: 10 AM - 6 PM</li>
                <li>Sunday: 10 AM - 6 PM</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase text-yellow-500">
                Address
              </h2>
              <p className="text-gray-200 text-sm lg:text-base font-medium">
                210 Bond St W Unit A, Oshawa, ON L1J 2L7
              </p>
              <div className="mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.014881996394!2d-78.8718579!3d43.8969585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51d72053c64b9%3A0x471c5c2b766bc95c!2sPasalubong%20905!5e0!3m2!1sen!2sca!4v1738977443160!5m2!1sen!2sca" width="auto" height="auto" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} Pasalubong905. All Rights Reserved.
          </span>

          <div>
            <span className="text-xs">
              Designed and developed by
            </span>
            <Link className="font-bold ml-1" href={"https://manuel-gatchalian.com/"}>Yengzzkie DzignTech</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
