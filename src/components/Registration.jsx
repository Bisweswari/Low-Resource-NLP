function Registration() {
  return (
    <section
      id="registration"
      className="py-16 md:py-24 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#6b21a8] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 tracking-wide">
          REGISTRATION DETAILS
        </h1>

        {/* Glass Container */}
        <div
          className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100
          text-black p-6 sm:p-10 md:p-14 pt-16 md:pt-20 rounded-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.15)] text-left"
        >
          {/* Register Button */}
          <div className="absolute -top-6 sm:-top-4 md:-top-3 left-1/2 -translate-x-1/2">
            <a
              href="https://forms.gle/PTduDxbvorXNRBae7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-10 md:px-14 py-3 md:py-4
              bg-gradient-to-r from-pink-500 to-purple-600
              rounded-full font-semibold tracking-wide
              text-base sm:text-lg md:text-xl
              shadow-xl hover:scale-105 hover:shadow-pink-500/40
              transition duration-300"
            >
              REGISTER NOW
            </a>
          </div>

          {/* Information */}
          <div className="space-y-5 text-gray-800 text-base md:text-lg leading-relaxed text-justify">
            <p>
              Interested students of (BTech/ M.Tech/ MCA/ MSc/BCA/BSc/ PhD
              Scholar) can register after paying Rs. 300/- (Three hundred only),
              and <b>No registration fees</b> for International Students (Upload
              the valid ID proof).
            </p>
            <p>
              After the payment, the student must fill the details in the given
              Google form for the registration with Transaction ID and date
              along with the proof of the transaction required to be uploaded.
            </p>

            {/* Bank Details */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">
                      Name of the Account
                    </td>
                    <td className="p-3">KSOT Projects</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">
                      Account Number
                    </td>
                    <td className="p-3">50029573273</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">Address</td>
                    <td className="p-3">Campus-1, Patia, Bhubaneswar-24</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">E-mail</td>
                    <td className="p-3">registrar@kiit.ac.in</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">Bank Name</td>
                    <td className="p-3">Indian Bank</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">
                      Branch Name
                    </td>
                    <td className="p-3">KIIT Branch</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">Bank Code</td>
                    <td className="p-3">751019021</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold p-3 bg-gray-100">
                      Account Type
                    </td>
                    <td className="p-3">Saving</td>
                  </tr>
                  <tr>
                    <td className="font-semibold p-3 bg-gray-100">IFSC Code</td>
                    <td className="p-3">IDIB000K717</td>
                  </tr>
                </tbody>
              </table>

              {/* QR Code Payment */}
              <div className="mt-8 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Scan & Pay
                </h3>

                <img
                  src="/qr-code.png"
                  alt="Scan to pay"
                  className="mx-auto w-40 md:w-52 rounded-lg shadow-lg border"
                />

                <p className="mt-3 text-sm md:text-base text-gray-700">
                  Scan the QR code using any UPI app to complete payment
                </p>
              </div>
            </div>
            <p>
              🔗 Google Form Link:{" "}
              <a
                href="https://forms.gle/PTduDxbvorXNRBae7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 underline hover:text-pink-600 transition"
              >
                Click Here
              </a>
            </p>

            <hr className="border-gray-300 my-6" />

            <p className="text-red-600 font-semibold text-base md:text-lg text-justify">
              ⚠ Available seats for the Speech Processing Workshop are Limited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
