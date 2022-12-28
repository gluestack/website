import React, { Children } from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";

function Cookies() {
  return (
    <Layout title={"Cookie Policy - gluestack"}>
      <InerBanner title="Cookie" last=" Policy" />
      <div className="container relative z-10 pb-14">
        <div className="">
          <ol className="list-none list-outside ">
            <li>
              <Heading priority="4">
                1. Introduction
              </Heading>
              <Text style="py-4">
                <p className="py-4">
                  Welcome to{" "}
                  <span className="font-displaySemibold">GeekyAnts Inc.</span>
                </p>
                <p className="py-4">
                  GeekyAnts Inc. (
                  <span className="font-displaySemibold">&quot;us&quot;</span> ,{" "}
                  <span className="font-displaySemibold">&quot;we&quot;</span> , or{" "}
                  <span className="font-displaySemibold">&quot;ou&quot;”</span>)
                  understands that your privacy is important to you and are
                  committed to being transparent about the technology it uses.
                  This Cookie Policy explains how and why cookies and other
                  technologies may be stored on and accessed from your device
                  when you use our Services and your related choices.
                </p>
                <p>
                  The terms used in this Cookie Policy but not defined here will
                  have the meanings given to them in our{" "}
                  <a
                    href="https://gluestack.io/privacy-policy"
                    className=" font-displaySemibold text-primary"
                  >
                    Privacy Policy
                  </a>
                  . Therefore, this Cookie Policy must be read with our Privacy
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
              <Heading priority="4">
                2. What are Cookies, Pixels and Local Storage?
              </Heading>
              <div className="py-4">
                <Text>
                  <p>
                    Cookies are small files that websites place on your computer
                    as you browse the web. Like many commercial websites, we use
                    cookies. Cookies — and similar technologies — do lots of
                    different jobs, like letting you navigate between pages
                    efficiently, remembering your preferences, and generally
                    improving the user experience. Cookies and other
                    technologies may also be used to measure the effectiveness
                    of marketing and otherwise assist us in making your use of
                    the Services and its features more relevant and useful to
                    you.
                  </p>
                  <p className="py-4">
                    Pixel tags (also known as{" "}
                    <span className="font-displaySemibold">“web beacons”</span>
                    or <span className="font-displaySemibold"> “pixels”</span>)
                    are small blocks of code on a web page or in an email
                    notification. Pixels allow companies to collect information
                    such as an individual&lsquo;s IP address, when the individual
                    viewed the pixel and the type of browser used. We use pixel
                    tags to understand whether you&lsquo;ve interacted with content on
                    our Platform, which helps us measure and improve our
                    Platform and personalize your experience.
                  </p>
                  <p className="py-4">
                    Local storage allows a website to store information locally
                    on your computer or mobile device. Local storage is mainly
                    used to store and retrieve data in HTML pages from the same
                    domain. We use local storage to customize what we show you
                    based on your past interactions with our Platform.
                  </p>
                  <p className="py-4">
                    It is important to understand that cookies (and the
                    technologies listed above) collect personal information as
                    well as non-identifiable information.
                  </p>
                </Text>
              </div>
            </li>

            <li>
              <Heading priority="4">
                3. How and Why Do We Use Your Cookies?
              </Heading>
              <div className="py-4">
                <Text>
                  <p className="py-4">
                    We use both 1st party cookies (which are set by us) and 3rd
                    party cookies (which are set by a server located outside the
                    domain of our Site). Some of the cookies or similar
                    technologies that we use are{" "}
                    <span className="font-displaySemibold">
                    &quot;strictly necessary&quot;
                    </span>{" "}
                    , that they are essential to the Site. Without them, the
                    Site will not work. Other cookies or similar technologies,
                    while not essential, help us improve our Platform or measure
                    audiences.
                  </p>
                  <Heading priority="4">
                    Why we use cookies is described below in more detail:
                  </Heading>
                  <div className="py-4 ml-8">
                    <ul>
                      <li className="py-4 list-alpha">
                        <span className="font-displaySemibold">
                          a. Strictly Necessary or Essential Cookies:
                        </span>{" "}
                        These cookies are necessary for the Site to function and
                        cannot be switched off in our systems. For example, we
                        use cookies to authenticate you. When you log on to our
                        websites, authentication cookies are set which let us
                        know who you are during a browsing session. We have to
                        load essential cookies for legitimate interests pursued
                        by us in delivering our Site&apos;s essential functionality
                        to you.
                      </li>
                      <li className="py-4 list-alpha">
                        <span className="font-displaySemibold">
                          b. Performance and Analytics Cookies:
                        </span>{" "}
                        These cookies allow us to count visits and traffic
                        sources so we can measure and improve the performance of
                        our Site. They help us to know which pages are the most
                        and least popular and see how visitors navigate the
                        Site. Performance cookies are used to help us with our
                        analytics, including to compile statistics and analytics
                        about your use of and interaction with the Site,
                        including details about how and where our Site are
                        accessed, how often you visit or use the Site, the date
                        and time of your visits, your actions on the Site, and
                        other similar traffic, usage, and trend data.
                      </li>
                      <li className="py-4 list-alpha">
                        <span className="font-displaySemibold">
                          c. Advertisement and Targeting Cookies:
                        </span>{" "}
                        These cookies are used to provide visitors with relevant
                        ads and marketing campaigns. These cookies track
                        visitors across websites and collect information to
                        provide customized ads.
                      </li>
                    </ul>
                  </div>
                </Text>
              </div>
            </li>

            <li>
              <Heading priority="4">
                4. Your Choices
              </Heading>
              <div className="py-4">
                <Text>
                  <p>
                    You can learn more about cookies by visiting &nbsp;
                    <a
                      href="https://www.allaboutcookies.org/"
                      className="text-primary"
                    >
                      https://www.allaboutcookies.org
                    </a> &nbsp;
                    ,  which includes additional useful information on cookies
                    and how to block cookies using different types of browsers
                  </p>
                  <p className="py-4">
                    If you&apos;d like to remove or disable cookies via your browser,
                    please refer to your browser&apos;s configuration documentation.
                    Please note, however, that by blocking or deleting all
                    cookies used on the Site, you may not be able to take full
                    advantage of the Site and you may not be able to properly
                    log on to the Site.
                  </p>
                  <p className="py-4">
                    For analytics, we use Google Analytics. To opt out from
                    Google Analytics, you can download a plug-in by visiting
                    &nbsp;
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className="text-primary"
                    >
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                    .
                  </p>
                </Text>
              </div>
            </li>

            <li>
              <Heading priority="4">
                5. Our Customers
              </Heading>
              <div className="py-4">
                <Text>
                  <p>
                    Customers who separately use cookies or similar technologies
                    on their website hosted by us are independently and solely
                    responsible for management of the data collected through
                    those cookies, compliance with all laws related to usage of
                    these technologies and notifying End Users as required by
                    applicable laws.
                  </p>
                </Text>
              </div>
            </li>

            <li>
              <Heading priority="4">
                6. Changes to this Cookie Policy
              </Heading>
              <div className="py-4">
                <Text>
                  <p>
                    We may update our Cookie Policy from time to time without
                    prior notice, at our sole discretion. We will notify you of
                    any changes by posting the new Cookie Policy on this page.
                  </p>
                  <p className="py-4">
                    You are advised to review this Cookie Policy periodically
                    for any changes. Changes to this Cookie Policy are effective
                    when they are posted on this page. Your continued use of the
                    Services after any changes or revisions to this Cookie
                    Policy shall indicate your agreement with the terms of such
                    revised Cookie Policy.
                  </p>
                </Text>
              </div>
            </li>

            <li>
              <Heading priority="4">
                7. Contact Us
              </Heading>
              <div className="py-4">
                <Text>
                  <p>
                    If you have any questions about this Cookie Policy, please
                    contact us:
                  </p>
                  <p className="py-4">
                    By email:{" "}
                    <a
                      href="mailto:hello@gluestack.io"
                      className="text-primary"
                    >
                      hello@gluestack.io
                    </a>
                    .{" "}
                  </p>
                </Text>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default Cookies;
