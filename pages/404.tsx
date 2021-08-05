import React, { ReactElement } from "react";

interface Props {}

export default function NotFound({}: Props): ReactElement {
  return (
    <main className="main page-404">
      <div className="container">
        <div className="row align-items-center height-100vh text-center">
          <div className="col-lg-8 m-auto mt-5" style={{ paddingTop: "10%" }}>
            <p className="mb-50">
              <h1 className="m-0 p-0 display-1">404</h1>
            </p>
            <h2 className="mb-30">Page Not Found</h2>
            <p className="font-lg text-grey-700 mb-30">
              The link you clicked may be broken or the page may have been
              removed.
              <br /> visit the{" "}
              <a href="index.html">
                {" "}
                <span> Homepage</span>
              </a>{" "}
              or{" "}
              <a href="page-contact.html">
                <span>Contact us</span>
              </a>{" "}
              about the problem
            </p>
            <form
              className="contact-form-style text-center"
              id="contact-form"
              action="#"
              method="post"
            >
              <div className="row">
                <div className="col-lg-6 m-auto">
                  <div className="input-style mb-20 hover-up">
                    <input name="name" placeholder="Search" type="text" />
                  </div>
                </div>
              </div>
              <a
                className="btn btn-default submit-auto-width font-xs hover-up"
                href="index.html"
              >
                Back To Home Page
              </a>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
