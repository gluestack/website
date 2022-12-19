import CookieConsent from "react-cookie-consent";
import Link from "next/link";
function Cookies() {
  return (
    <CookieConsent
      containerClasses="cookies"
      style={{
        background: "rgba(25, 25, 25, 0.9)",
        fontSize: "12px",
        color: "#efefef",
        padding: "0px 10px",
        lineHeight: "1.2em",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999999",
      }}
      contentClasses="container"
      buttonStyle={{
        backgroundColor: "#8944CE",
        position: "relative",
        color: "#fff !important",
        fontSize: "12px",
        padding: "5px 8px",
        width: "auto",
        minWidth: "auto",
        zIndex: "99",
      }}
      buttonText="Accept"
    >
      <div className="flex lg:flex-row flex-col items-center lg:text-xs text-xxs">
        We use our own and third-party cookies and other tracking technologies,
        by continuing to browse the website, you accept our use of cookies and
        tracking technologies
        <div
          className="lg:ml-2 ml-0 lg:mt-0 mt-2 hover:underline relative"
          style={{ padding: "5px 8px", boxShadow: "inset 0 0 2px #8944CE" }}
        >
          <Link
            href="/cookie-policy"
            className="	"
            style={{ boxShadow: "inset 0 0 2px #8944CE" }}
            prefetch={false}
            legacyBehavior
          >
            <a className="ml-auto font-normal text-white-100 text-xs shadow-sm whitespace-nowrap">
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </CookieConsent>
  );
}

export default Cookies;
