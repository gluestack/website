import React, { Children } from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";

function Cookies() {
  return (
    <Layout title={"Cookie Policy - gluestack"}>
      <InerBanner title="Cookie" last=" Policy" />
      <div className="container pb-14">
        <div className="">
          <ol className="list-none list-outside	">
            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                1. Introduction
              </Heading>
              <Text style="py-4">
                <p>
                  Welcome to{" "}
                  <span className="font-displaySemibold">GeekyAnts Inc.</span>{" "}
                </p>
                <p className="py-4">
                  GeekyAnts Inc. (“us”, “we”, or “our”) understands that your
                  privacy is important to you and are committed to being
                  transparent about the technology it uses. This cookie policy
                  explains how and why cookies and other technologies may be
                  stored on and accessed from your device when you use our
                  Services and your related choices.
                </p>
                <p>
                  The terms used in this Cookie Policy but not defined here will
                  have the meanings given to them in our Privacy Policy.
                  Therefore, this cookie policy must be read with our Privacy
                  Policy.
                </p>
                <p className="py-4 font-displaySemibold">
                  By continuing to use our Services, you agree that we can
                  store, and access Cookies and Other Tracking Technologies as
                  described in this Cookie Policy.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                2. What are Cookies and Other Tracking Technologies?
              </Heading>

              <Text style="py-4">
                <p>
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device. Other
                  tracking technologies are also used such as beacons, tags and
                  scripts to collect and track information and to improve and
                  analyze our Service. Furthermore, Cookies and other
                  technologies may also be used to measure the effectiveness of
                  marketing and otherwise assist us in making your use of the
                  Service and its features more relevant and useful to you.{" "}
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                3. How do our Sites use Cookies and Other Tracking Technologies?
              </Heading>

              <span className="text-md font-displaySemibold"></span>
              <Text style="py-4">
                <p>
                  We use Cookies and Other Tracking Technologies to identify you
                  and your interests, to remember your preferences, and to track
                  your use of our Sites. We also use Cookies and Other Tracking
                  Technologies to control access to certain content on our
                  Sites, protect the Sites, and to process any requests that you
                  make of us. To administer our Sites and for research purposes,
                  We may also have contracted with third-party service providers
                  to track and analyze statistical usage and volume information
                  from our Site users. These third-party service providers may
                  use persistent Cookies to help us to improve the user
                  experience, manage our site content, and analyze how users
                  navigate and utilize the Sites.
                </p>
                <p className="py-4">
                  We use both First Party cookies and Third Party
                  cookies.“First-party cookies” are cookies that belong to us
                  and that we place on your device. “Third-party Cookies” are
                  cookies that another party places on your device through our
                  Site. We may contract with third-party service providers to
                  send emails to users who have provided us with their contact
                  information. To help measure and improve the effectiveness of
                  our email communications, and/or to determine whether messages
                  have been opened and links clicked on, the third-party service
                  providers may place Cookies on the devices of these users.
                </p>
                <p className="py-4">
                  The following are some examples of Cookies we use:
                </p>
                <ul className="list-disc list-outside ml-8">
                  <li>
                    <span className="font-displaySemibold">
                      Session Cookies:
                    </span>{" "}
                    We use Session Cookies to operate our Service.
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Preference Cookies:
                    </span>{" "}
                    We use Preference Cookies to remember your preferences and
                    various settings. This includes recording your acceptance of
                    our Cookie Policy to remove the cookie message which first
                    appears when you use the Sites.
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Security Cookies:
                    </span>{" "}
                    We use Security Cookies for security purposes.
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Advertising Cookies:
                    </span>{" "}
                    Advertising Cookies are used to serve you with
                    advertisements that may be relevant to you and your
                    interests.
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Persistent Cookies:
                    </span>{" "}
                    We use persistent Cookies to improve your experience of
                    using the Sites.
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Functionality Cookies:
                    </span>
                    These cookies are used to enable certain additional
                    functionality on our Site. This functionality improves user
                    experience and enables us to provide better Services and a
                    more efficient Platform.
                  </li>
                </ul>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                4. Your Choices
              </Heading>

              <Text style="py-4">
                <p>
                  If you&lsquo;d like to remove or disable cookies via your
                  browser, please refer to your browser&lsquo;s configuration
                  documentation. Please note, however, that by blocking or
                  deleting all cookies used on the Sites, you may not be able to
                  use some portions of the Services.
                </p>
                <p className="py-4">
                  If you want to remove previously-stored cookies, you can
                  manually delete the cookies at any time. However, this will
                  not prevent the sites from placing further cookies on your
                  device unless and until you adjust your Internet browser
                  setting as described above.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                5. Our Customers
              </Heading>

              <Text style="py-4">
                <p>
                  Customers who separately use cookies or similar technologies
                  on their website hosted by us are independently and solely
                  responsible for management of the data collected through those
                  cookies, compliance with all laws related to usage of these
                  technologies and notifying End Users as required by applicable
                  laws.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                6. Changes to this Cookie Policy
              </Heading>

              <Text style="py-4">
                <p>
                  We may update our Cookie Policy from time to time without
                  prior notice, at our sole discretion. We will notify you of
                  any changes by posting the new Cookie Policy on this page.
                </p>
                <p className="py-4">
                  You are advised to review this Cookie Policy periodically for
                  any changes. Changes to this Cookie Policy are effective when
                  they are posted on this page. Your continued use of the
                  Services after any changes or revisions to this Cookie Policy
                  shall indicate your agreement with the terms of such revised
                  Cookie Policy.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" style="text-md font-displaySemibold">
                7. Contact Us
              </Heading>

              <Text style="py-4">
                <p>
                  If you have any questions about this Cookie Policy, please
                  contact us:{" "}
                </p>
                <p className="py-4">
                  By email:{" "}
                  <a href="mailto:hello@gluestack.io" className="text-primary">
                    hello@gluestack.io
                  </a>
                  .{" "}
                </p>
              </Text>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default Cookies;
