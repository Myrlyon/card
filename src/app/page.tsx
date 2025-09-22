import ModelViewer from "@/components/modelViewer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[#0231fe]">
      <div className="relative flex items-center justify-center">
        <ModelViewer />
        <div className="absolute items-center justify-center flex flex-col gap-4">
          <div className=" text-5xl font-semibold text-[#0231fe] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            margician
          </div>
          <div className="flex gap-6 text-[#0231fe] text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            <a
              target="_blank"
              href="https://github.com/myrlyon"
              className="transition-transform hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5rem"
                height="2.5rem"
                viewBox="2.05 2 19.95 19.46"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              href="https://open.spotify.com/user/zofqx1ov6e78r75ijq670o2nw"
              className="transition-transform hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5rem"
                height="2.5rem"
                viewBox="2.02 2.02 19.98 19.98"
              >
                <path
                  fill="currentColor"
                  d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991c0 5.494 4.496 9.99 9.991 9.99c5.494 0 9.99-4.496 9.99-9.99c0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201c-2.349-1.45-5.296-1.75-8.793-.951c-.348.102-.648-.148-.748-.449c-.101-.35.149-.648.45-.749c3.795-.85 7.093-.499 9.69 1.1c.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-.548 11.239 1.351c.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6a.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351c.449.249.599.849.349 1.298c-.25.35-.849.498-1.299.248z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" flex flex-col items-center gap-4">
        <ModelViewer />
        <div className="flex items-center flex-col gap-5">
          <div className="text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] ">
            margician
          </div>
          <div className="text-2xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            ★ رحّال الصحراء ★
          </div>
        </div>
        <div className="flex gap-6 text-white text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          <a
            target="_blank"
            href="https://github.com/myrlyon"
            className="transition-transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="2.05 2 19.95 19.46"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/user/zofqx1ov6e78r75ijq670o2nw"
            className="transition-transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="2.02 2.02 19.98 19.98"
            >
              <path
                fill="currentColor"
                d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991c0 5.494 4.496 9.99 9.991 9.99c5.494 0 9.99-4.496 9.99-9.99c0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201c-2.349-1.45-5.296-1.75-8.793-.951c-.348.102-.648-.148-.748-.449c-.101-.35.149-.648.45-.749c3.795-.85 7.093-.499 9.69 1.1c.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-.548 11.239 1.351c.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6a.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351c.449.249.599.849.349 1.298c-.25.35-.849.498-1.299.248z"
              ></path>
            </svg>
          </a>
        </div>
      </div> */
}
