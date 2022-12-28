import React, { Children } from "react";
import Heading from "../elements/Heading";
import Text from "../elements/Text";
import Layout from "../Layout/Layout";
import InerBanner from "../components/InerBanner";

function Privacy() {
  return (
    <Layout pageTitle={"Privacy Policy - gluestack"}>
      <InerBanner title="Privacy" last=" Policy" />
      <div className="container relative z-10 pb-14">
        <div className="">
          <ol className="list-outside list-nonel ">
            <li>
              <Heading priority="4" >
                1. Introduction
              </Heading>{" "}
              <Text>
                <p className="py-4">
                  Welcome to{" "}
                  <span className="font-displaySemibold">GeekyAnts Inc.</span>
                </p>
                <p className="py-4">
                  GeekyAnts Inc. ({" "}
                  <span className="font-displaySemibold">&quot;us&quot;</span> ,{" "}
                  <span className="font-displaySemibold">&quot;we&quot;</span> , or{" "}
                  <span className="font-displaySemibold">&quot;our&quot;</span>) operates{" "}
                  <a href="https://gluestack.io/" className="text-primary">
                    https://gluestack.io
                  </a>
                  ,&nbsp;
                  <a href="https://seal.gluestack.io/" className="text-primary">
                    https://seal.gluestack.io
                  </a>{" "}
                  and/or{" "}
                  <a href="https://auth.gluestack.io/" className="text-primary">
                    https://auth.gluestack.io
                  </a>
                  (hereinafter referred to as each a “Site”).
                </p>
                <p className="py-4">
                  Our Privacy Policy (
                  <span className="font-displaySemibold">“Policy”</span>)
                  governs your visit to{" "}
                  <a href="https://gluestack.io/" className="text-primary">
                    https://gluestack.io
                  </a>
                  ,&nbsp;
                  <a href="https://seal.gluestack.io/" className="text-primary">
                    https://seal.gluestack.io
                  </a>{" "}
                  , and/or{" "}
                  <a href="https://auth.gluestack.io/" className="text-primary">
                    https://auth.gluestack.io
                  </a>{" "}
                  and the use of our Service as defined hereunder, and explains
                  how we collect, safeguard, use and disclose information that
                  results from your use of our Service.
                </p>
                <p className="py-4">
                  We use and/or collect your personal data and other information
                  to provide and improve our Service. By using our Sites and
                  Services, you agree to the collection, use and disclosure of
                  information in accordance with this Policy. Therefore, we
                  recommend that you read this Privacy Policy carefully as it
                  provides important information about your personal data and
                  your rights under the law. Unless otherwise defined in this
                  Privacy Policy, the terms used in this Privacy Policy have the
                  same meanings as in our Terms of Service.
                </p>
                <p className="py-4 ">
                  Our{" "}
                  <a
                    href="https://gluestack.io/terms"
                    className="text-primary font-displaySemibold"
                  >
                    Terms of Service
                  </a>{" "}
                  ( <span className="font-displaySemibold">“Terms”</span>)
                  govern all use of our Service and together with the Privacy
                  Policy constitute your agreement with us (
                  <span className="font-displaySemibold">“Agreement”</span>).
                </p>
                <p className="py-4">
                  During the Preview phase, the primary targeted users for our
                  Services are Customers located in the geographic locations of
                  the United States.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                2. Definitions
              </Heading>
              <Text>
                <p className="py-4">
                  <span className="font-displaySemibold">SERVICE</span> means
                  &nbsp;{" "}
                  <a href="https://gluestack.io/" className="text-primary">
                    https://gluestack.io
                  </a>{" "}
                  &nbsp;,{" "}
                  <a href="https://seal.gluestack.io/" className="text-primary">
                    https://seal.gluestack.io
                  </a>
                  &nbsp; and/or{" "}
                  <a href="https://auth.gluestack.io/" className="text-primary">
                    https://auth.gluestack.io
                  </a>{" "}
                  &nbsp;website operated by GeekyAnts Inc.{" "}
                  <a href="https://gluestack.io/" className="text-primary">
                    https://gluestack.io
                  </a>{" "}
                  is a open source full-stack framework for web, mobile and
                  backend.{" "}
                  <a href="https://seal.gluestack.io/" className="text-primary">
                    https://seal.gluestack.io
                  </a>{" "}
                  &nbsp; provides a cloud platform for deployment, hosting,
                  sharing services and related analytics tools and{" "}
                  <a href="https://auth.gluestack.io/" className="text-primary">
                    https://auth.gluestack.io
                  </a>{" "}
                  provides support services to other gluestack platforms.
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">
                    PERSONAL DATA OR PERSONAL INFORMATION
                  </span> means data that is unique to a living individual who can be
                  identified from those data (or from those and other
                  information either in our possession or likely to come into
                  our possession).
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">USAGE DATA </span>is
                  data collected automatically either generated by the use of
                  the Service or from the Service infrastructure itself (for
                  example, the duration of a page visit).
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">COOKIES </span>are
                  small files stored on your device (computer or mobile device).
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">DATA CONTROLLER </span>
                  means a natural or legal person who (either alone or jointly
                  or in common with other persons) determines the purposes for
                  which and the manner in which any personal data are, or are to
                  be, processed. For the purpose of this Privacy Policy, we are
                  a Data Controller when we process your data.
                </p>

                <p className="py-4">
                  <span className="font-displaySemibold">DATA CONTROLLER </span>
                  means a natural or legal person who (either alone or jointly
                  or in common with other persons) determines the purposes for
                  which and the manner in which any personal data are, or are to
                  be, processed. For the purpose of this Privacy Policy, we are
                  a Data Controller when we process your data.
                </p>

                <p className="py-4">
                  <span className="font-displaySemibold">
                    DATA PROCESSORS (OR SERVICE PROVIDERS){" "}
                  </span>
                  means any natural or legal person who processes the data on
                  behalf of the Data Controller. We may use the services of
                  various Service Providers in order to process your data more
                  effectively.
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">DATA SUBJECT </span>is
                  any living individual who is the subject of Personal Data.
                </p>

                <p className="py-4">
                  <span className="font-displaySemibold">THE USER </span>is the
                  individual using our Service. The User corresponds to the Data
                  Subject, who is the subject of Personal Data.
                </p>

                <p className="py-4">
                  <span className="font-displaySemibold">CUSTOMERS</span>, this
                  includes any individual who uses our Service individually or
                  on behalf of an entity or organization.
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">END USER</span>, As
                  part of our Services, we also provide hosting solutions to our
                  Customers through our global servers. Our customers may
                  collect personal data from the Customer’s End Users in
                  connection with the products or services that they offer. For
                  the purpose of this Privacy Policy, such Customer’s End Users’
                  are hereinafter termed as End User.
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">PREVIEW</span>,means
                  Services, releases, features, or functionality provided for
                  preview, pre-release, evaluation, demonstration, or similar
                  purposes.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                3. Information Collection and Use
              </Heading>

              <Text>
                <p className="py-4">
                  When you use our Services, we collect several different types
                  of information as defined below for various purposes to
                  provide and improve our Service to you.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4">
                4. Types of Data Collected
              </Heading>
              <Text>
                <ul className="ml-4 list-disc list-outside ">
                  <li>
                    <span className="font-displaySemibold">Personal Data</span>
                    <p className="py-4">
                      While using our Service, we may ask you to provide us with
                      certain personally identifiable information that can be
                      used to contact or identify you (“Personal Data”).
                      Personally identifiable information may include, but is
                      not limited to:
                     <p className="ml-4">
                     <p className="py-2">(a) Email address</p>
                      <p className="py-2">(b) First name and last name</p>
                      <p className="py-2">(c) Phone number</p>
                      <p className="py-2">(d) Address, State, Province, ZIP/Postal code, City</p>
                      <p className="py-2">(e) Cookies and Usage Data</p>
                      <p className="py-2">(e) Cookies and Usage Data</p>
                     </p>
                      <p className="py-4">
                        We may use your Personal Data to contact you with
                        newsletters, marketing or promotional materials and
                        other information that may be of interest to you. You
                        may opt-out of receiving any, or all, of these
                        communications from us by emailing at{" "}
                        <a
                          href="mailto:support@gluestack.io."
                          className="text-primary"
                        >
                          support@gluestack.io.
                        </a>
                        .
                      </p>
                    </p>
                  </li>
                  <li>
                    <span className="font-displaySemibold">Usage Data</span>
                    <p className="py-4">
                      We may also collect information that your browser sends
                      whenever you visit our Service or when you access the
                      Service by or through a mobile device .
                    </p>
                    <p className="py-4">
                      This Usage Data may include information such as your
                      computer&apos;s Internet Protocol address (e.g. IP address),
                      browser type, browser version, the pages of our Service
                      that you visit, the time and date of your visit, the time
                      spent on those pages, unique device identifiers and other
                      diagnostic data.
                    </p>
                    <p className="py-4">
                      When you access Service with a mobile device, this Usage
                      Data may include information such as the type of mobile
                      device you use, your mobile device unique ID, the IP
                      address of your mobile device, your mobile operating
                      system, the type of mobile Internet browser you use,
                      unique device identifiers and other diagnostic data.
                    </p>
                  </li>
                  <li>
                    <span className="font-displaySemibold">Location Data</span>
                    <p className="py-4">
                      We may use and store information about your location if
                      you give us permission to do so (
                      <span className="font-displaySemibold">
                        “Location Data”
                      </span>
                      ). We use this data to provide features of our Service, to
                      improve and customize our Service.
                    </p>
                    <p className="py-4">
                      You can enable or disable location services when you use
                      our Service at any time by way of your device settings.
                    </p>
                  </li>
                  <li>
                    <span className="font-displaySemibold">
                      Tracking Cookies Data
                    </span>
                    <p className="py-4">
                      We use cookies and similar tracking technologies to track
                      the activity on our Service and we hold certain
                      information.
                    </p>
                    <p className="py-4">
                      Cookies are files with a small amount of data which may
                      include an anonymous unique identifier. Cookies are sent
                      to your browser from a website and stored on your device.
                      Other tracking technologies are also used such as beacons,
                      tags and scripts to collect and track information and to
                      improve and analyze our Service.
                    </p>
                    <p className="py-4">
                      You can instruct your browser to refuse all cookies or to
                      indicate when a cookie is being sent. However, if you do
                      not accept cookies, you may not be able to use some
                      portions of our Service.
                    </p>
                    <p className="py-4">
                      Examples of Cookies we use:
                      <br />
                      (a) Session Cookies: We use Session Cookies to operate our
                      Service.
                      <br />
                      (b) Preference Cookies: We use Preference Cookies to
                      remember your preferences and various settings.
                      <br />
                      (c) Security Cookies: We use Security Cookies for security
                      purposes.
                      <br />
                      (d) Advertising Cookies: Advertising Cookies are used to
                      serve you with advertisements that may be relevant to you
                      and your interests.
                      <br />
                      For more information on our use of cookies and the data
                      that they collect, see our Cookie Policy.
                    </p>
                  </li>
                  <li>
                    <span className="font-displaySemibold">Other Data</span>
                    <p className="py-4">
                      While using our Service, we may also collect the following
                      information: sex, age, date of birth, place of birth,
                      passport details, citizenship, registration at the place
                      of residence and actual address, telephone number (work,
                      mobile), details of documents on education, qualification,
                      professional training, employment agreements,
                      non-disclosure agreements, information on bonuses and
                      compensation, information on marital status, family
                      members, social security (or other taxpayer
                      identification) number, office location, and other data.
                    </p>
                  </li>
                </ul>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                5. Use of Data
              </Heading>

              <Text>
                <ul className="ml-4 list-disc list-outside">
                  <li>
                    <p className="py-4">
                      We use your Data for for a number of different reasons, as
                      further explained below.
                      <p className="py-2">
                        (a) to provide and maintain our Service;
                      </p>
                      <p className="py-2">
                        (b) to notify you about changes to our Service;
                      </p>
                      <p className="py-2">
                        (c) to allow you to participate in interactive features
                        of our Service when you choose to do so;
                      </p>
                      <p className="py-2">(d) to provide customer support;</p>
                      <p className="py-2">
                        (e) to gather analysis or valuable information so that
                        we can improve our Service;
                      </p>
                      <p className="py-2">
                        (f) to monitor the usage of our Service;
                      </p>
                      <p className="py-2">
                        (g) to detect, prevent and address technical issues,
                        fraud, illegal activities or security breaches;
                      </p>
                      <p className="py-2">
                        (h) to fulfill any other purpose for which you provide
                        it;
                      </p>
                      <p className="py-2">
                        (i) to carry out our obligations and enforce our rights
                        arising from any contracts entered into between you and
                        us, including for billing and collection;
                      </p>
                      <p className="py-2">
                        (j) to provide you with notices about your account
                        and/or subscription, including expiration and renewal
                        notices, email-instructions, etc.;
                      </p>
                      <p className="py-2">
                        (k) to provide you with news, special offers and general
                        information about other goods, services and events which
                        we offer that are similar to those that you have already
                        purchased or enquired about unless you have opted not to
                        receive such information;
                      </p>
                      <p className="py-2">
                        (l) in any other way we may describe when you provide
                        the information;
                      </p>
                      <p className="py-2">
                        (m) for any other purpose with your consent.
                      </p>
                      <p className="py-4">
                        In addition, for users located in the EU, we must
                        provide a valid legal basis in order to process your
                        personal data. The main legal basis under the European
                        Union&apos;s General Data Protection Regulation (GDPR) that
                        justify our collection and use of your personal data
                        are: .
                      </p>
                    </p>
                  </li>
                  <li>
                    <p className="py-4">
                      <span className="font-displaySemibold">
                        Performance of a contract
                      </span>
                      - When your personal data is necessary to enter into or
                      perform our contract with you.
                    </p>
                    <p className="py-4">
                      <span className="font-displaySemibold">Consent</span>-
                      When you have consented to our use of your personal data
                      (online or offline).
                    </p>
                    <p className="py-4">
                      <span className="font-displaySemibold">
                        Legitimate interests
                      </span>
                      - When we use your personal data to achieve a legitimate
                      interest and our reasons for using it outweigh any
                      prejudice to your data protection rights.
                    </p>
                    <p className="py-4">
                      <span className="font-displaySemibold">
                        Legal obligation
                      </span>
                      - When your personal data is necessary to protect the
                      vital interests.
                    </p>
                    <p className="py-4">
                      <span className="font-displaySemibold">Public task</span>-
                      When processing is necessary for the performance of a task
                      carried out in the public interest.
                    </p>
                  </li>
                </ul>
              </Text>
            </li>
            <li>
              <Heading priority="4" >
                6. Information we Process on Behalf of Customers
              </Heading>

              <Text>
                <p className="py-4">
                  We also use and/or collect the personal data and other
                  information of Customer’s End Users’ (“End Users”) when the
                  End User uses our Services through our Customer or when
                  Customer uses our Services. Even though we store End Users&apos;
                  personal data, it does not cover how or why our Customers may
                  collect, handle and disclose their End Users&apos; personal data
                  when the End Users’ visit or use their websites or platforms.
                  Each Customer is responsible for posting its own terms,
                  conditions, and privacy policies, and ensuring compliance with
                  all applicable laws and regulations.
                </p>
                <p className="py-4">
                  As noted above, our Customers may collect personal data from
                  their End Users in connection with the products or services
                  that they offer to End Users. Because we host our Customers&apos;
                  websites and provide other analytics tools, we process End
                  Users&apos; personal data when they use our Customers&apos; websites,
                  web applications, and APIs. This information may also include,
                  but is not limited to, IP addresses, system configuration
                  information, and other information about traffic to and from
                  Customers&apos; websites, as well as Location Information derived
                  from IP addresses. All of this information is stored as part
                  of our Services, but Customers are responsible for the content
                  transmitted across our network (e.g., images, written content,
                  graphics, etc.), as well as any personal data they collect.
                  Customers are also solely responsible for notifying their End
                  Users of their personal information collection, use, and
                  disclosure. With respect to such data, we collect and use it
                  to operate, maintain, and improve our Services in performance
                  of our obligations.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                7. Retention of Data
              </Heading>

              <Text>
                <p className="py-4">
                  We will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Privacy Policy. We
                  will retain and use your Personal Data to the extent necessary
                  to comply with our legal obligations (for example, if we are
                  required to retain your data to comply with applicable laws),
                  resolve disputes, and enforce our legal agreements and
                  policies.
                </p>
                <p className="py-4">
                  We will also retain Usage Data for internal analysis purposes.
                  Usage Data is generally retained for a shorter period, except
                  when this data is used to strengthen the security or to
                  improve the functionality of our Service, or we are legally
                  obligated to retain this data for longer time periods.
                </p>
                <p className="py-4">
                  In some instances, we may choose to anonymize your personal
                  data instead of deleting it, for statistical use, for
                  instance. When we choose to anonymize, we make sure that there
                  is no way that the personal data can be linked back to you or
                  any specific user.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                8. Transfer of Data
              </Heading>

              <Text>
                <p className="py-4">
                  Your information, including Personal Data, may be transferred
                  to India and maintained on Indian computers located outside of
                  your state, province, country, or other governmental
                  jurisdiction where the data protection laws may differ from
                  those of your jurisdiction.
                </p>
                <p className="py-4">
                  If you are located in the United States or outside, and choose
                  to provide information to us, please note that we transfer the
                  data, including Personal Data, to India and process it there.
                </p>
                <p className="py-4">
                  If you are a Customer, you are responsible for informing your
                  End Users of how and where their personal data will be
                  processed at the time of collection.
                </p>
                <p className="py-4">
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p className="py-4">
                  GeekyAnts Inc. will take all the steps reasonably necessary to
                  ensure that your data is treated securely and in accordance
                  with this Privacy Policy and no transfer of your Personal Data
                  will take place to an organization or a country unless there
                  are adequate controls in place including the security of your
                  data and other personal information.
                </p>
              </Text>
            </li>
            <li>
              <Heading priority="4" >
                9. Disclosure of Data
              </Heading>

              <Text>
                <p className="py-4">
                  We may disclose personal data that we collect, or you provide
                </p>
                <span className="font-displaySemibold">
                  (a) Disclosure for Law Enforcement.
                </span>
                <p className="py-4">
                  Under certain circumstances, we may be required to disclose
                  your Personal Data if required to do so by law or in response
                  to valid requests by public authorities.
                </p>
                <span className="font-displaySemibold">
                  (b) Business Transaction.
                </span>
                <p className="py-4">
                  If we or our subsidiaries are involved in a merger,
                  acquisition, or asset sale, your Personal Data may be
                  transferred.
                </p>
                <span className="font-displaySemibold">(c) Our Customers.</span>
                <p className="py-4">
                  When we act on behalf of our Customers (as a Data Processor or
                  Service Provider), we may provide End Users&apos; personal data to
                  our Customers in order to comply with their requests, End
                  Users&apos; requests and/or regulator requests, among others.
                  Occasionally, we will provide our Customers with aggregated
                  information that does not identify End Users directly, in
                  order to provide information about usage, demographics (such
                  as location) or other general information.
                </p>
                <span className="font-displaySemibold">
                  (d) Other cases. We may disclose your information also:
                </span>
                <p className="ml-4">
                  <p className="py-4">
                    (i) to our subsidiaries and affiliates;
                  </p>
                  <p className="py-4">
                    (ii) to contractors, Service Providers, and other third
                    parties we use to support our business;
                  </p>
                  <p className="py-4">
                    (iii) to fulfill the purpose for which you provide it;
                  </p>
                  <p className="py-4">
                    (iv) for the purpose of including your company’s logo on our
                    website;
                  </p>
                  <p className="py-4">
                    (v) for any other purpose disclosed by us when you provide
                    the information;
                  </p>
                  <p className="py-4">
                    (vi) with your consent in any other cases;
                  </p>
                  <p className="py-4">
                    (vii)if we believe disclosure is necessary or appropriate to
                    protect the rights, property, or safety of our Company, our
                    Customers, or others.
                  </p>
                </p>
                <span className="font-displaySemibold">
                  (e) Anonymized Information
                </span>
                <p className="py-4">
                  We also share aggregated, automatically-collected or otherwise
                  non-personal information with third parties for various
                  purposes, including (i) compliance with reporting obligations;
                  (ii) for business or marketing purposes; (iii) to assist us
                  and other parties in understanding our users&apos; interests,
                  habits and usage patterns for certain programs, content,
                  services, marketing and/or functionality available through the
                  use of our Services. We do not share personal data about you
                  in this case.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                10. Account Protection:
              </Heading>

              <Text>
                <p className="py-4">
                  If you register with us, your password is the key to your
                  account. You shall be solely responsible for all the
                  activities happening under your username and you shall be
                  solely responsible for keeping your password secure. Do not
                  disclose your password to anyone. If you share your password
                  or your personal information with others, you shall be solely
                  responsible for all actions taken under your username and you
                  may lose control over your personal information.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                11. Security of Data
              </Heading>

              <Text>
                <p className="py-4">
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                12. Your Data Protection Rights Under General Data Protection
                Regulation (GDPR)
              </Heading>

              <Text>
                <p className="py-4">
                  If you are a resident of the European Union (EU) and European
                  Economic Area (EEA), you have certain data protection rights,
                  covered by GDPR. – See more at{" "}
                  <a
                    href="https://eur-lex.europa.eu/eli/reg/2016/679/oj"
                    className="text-primary"
                  >
                    https://eur-lex.europa.eu/eli/reg/2016/679/oj
                  </a>
                </p>
                <p className="py-4">
                  We aim to take reasonable steps to allow you to correct,
                  amend, delete, or limit the use of your Personal Data.
                </p>
                <p className="py-4">
                  If you wish to be informed what Personal Data we hold about
                  you and if you want it to be removed from our systems, please
                  email us at{" "}
                  <a
                    href="mailto:support@gluestack.io."
                    className="text-primary"
                  >
                    support@gluestack.io
                  </a>{" "}
                  .
                </p>
                <p className="py-4">
                  In certain circumstances, you have the following data
                  protection rights:
                </p>
                <div className="ml-4">
                  <p className="py-2">
                    (a) the right to access, update, or to delete the
                    information we have on you;
                  </p>
                  <p className="py-2">
                    (b) the right of rectification. You have the right to have
                    your information rectified if that information is inaccurate
                    or incomplete;
                  </p>
                  <p className="py-2">
                    (c) the right to object. You have the right to object to our
                    processing of your Personal Data;
                  </p>
                  <p className="py-2">
                    (d) the right of restriction. You have the right to request
                    that we restrict the processing of your personal
                    information;
                  </p>
                  <p className="py-2">
                    (e) the right to data portability. You have the right to be
                    provided with a copy of your Personal Data in a structured,
                    machine-readable and commonly used format;
                  </p>
                  <p className="py-2">
                    (f) the right to withdraw consent. You also have the right
                    to withdraw your consent at any time where we rely on your
                    consent to process your personal information;
                  </p>
                </div>
                <p className="py-4">
                  Please note that we may ask you to verify your identity before
                  responding to such requests. Please note, we may not be able
                  to provide our Service without some necessary data.
                </p>
                <p className="py-4">
                  You have the right to complain to a Data Protection Authority
                  about our collection and use of your Personal Data. For more
                  information, please contact your local data protection
                  authority in the European Economic Area (EEA).
                </p>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                13. Your Data Protection Rights under the California Online
                Privacy Protection Act (CalOPPA)
              </Heading>

              <Text>
                <p className="py-4">
                  CalOPPA is the first state law in the nation to require
                  commercial websites and online services to post a privacy
                  policy. The law’s reach stretches well beyond California to
                  require a person or company in the United States (and
                  conceivable the world) that operates websites collecting
                  personally identifiable information from California consumers
                  to post a conspicuous privacy policy on its website stating
                  exactly the information being collected and those individuals
                  with whom it is being shared, and to comply with this policy.
                  – See more at:
                  <a
                    href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/"
                    className="text-primary"
                  >
                    https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
                  </a>
                </p>
                <p className="py-4">
                  According to CalOPPA we agree to the following:
                </p>
                <div className="ml-4">
                  <p className="py-2">
                    (a) users can visit our site anonymously;
                  </p>
                  <p className="py-2">
                    (b) our Privacy Policy link includes the word “Privacy”, and
                    can easily be found on the home page of our Sites specified
                    above.;
                  </p>
                  <p className="py-2">
                    (c) users will be notified of any Privacy Policy changes on
                    our Privacy Policy Page;
                  </p>
                  <p className="py-2">
                    (d) users are able to change their personal information by
                    emailing us at{" "}
                    <a
                      href="mailto:support@gluestack.io."
                      className="text-primary"
                    >
                      support@gluestack.io.
                    </a>
                    .
                  </p>
                </div>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                14. Our Policy on “Do Not Track” Signals
              </Heading>

              <Text>
                <p className="py-4">
                  We do not respond to Do Not Track (&quo;DNT&quo;) browser signals. For
                  more information on DNT settings generally, please visit{" "}
                  <a href="https://allaboutdnt.com">https://allaboutdnt.com</a>{" "}
                  .
                </p>
              </Text>
            </li>
            <li>
              <Heading priority="4" >
                15. Your Data Protection Rights under the California Consumer
                Privacy Act (CCPA)
              </Heading>

              <Text>
                <p className="py-4">
                  If you are a California resident, you are entitled to learn
                  what data we collect about you, ask to delete your data and
                  not to sell (share) it. To exercise your data protection
                  rights, you can make certain requests and ask us:
                </p>
                <div className="py-4 ml-4">
                  <p>
                    (a) What personal information we have about you. If you make
                    this request, we will share with you:
                  </p>
                  <div className="ml-8">
                    <p className="py-2">
                      (i) The categories of personal information we have
                      collected about you.
                    </p>
                    <p className="py-2">
                      (ii) The categories of sources from which we collect your
                      personal information.
                    </p>
                    <p className="py-2">
                      (iii) The business or commercial purpose for collecting or
                      selling your personal information.
                    </p>
                    <p className="py-2">
                      (iv) The categories of third parties with whom we share
                      personal information.
                    </p>
                    <p className="py-2">
                      (v) The specific pieces of personal information we have
                      collected about you.
                    </p>
                    <p className="py-2">
                      (vi) A list of categories of personal information that we
                      have sold, along with the category of any other company we
                      sold it to. If we have not sold your personal information,
                      we will inform you of that fact.
                    </p>
                    <p className="py-2">
                      (vii)A list of categories of personal information that we
                      have disclosed for a business purpose, along with the
                      category of any other company we shared it with.
                    </p>
                  </div>
                  <p className="py-4">
                    Please note, you are entitled to ask us to provide you with
                    this information up to two times in a rolling twelve-month
                    period. When you make this request, the information provided
                    may be limited to the personal information we collected
                    about you in the previous 12 months.
                  </p>
                  <p className="py-4">
                    (b){" "}
                    <span className="font-displaySemibold">
                      To delete your personal information.
                    </span>{" "}
                    If you make this request, we will delete the personal
                    information we hold about you as of the date of your request
                    from our records and direct any Service Providers to do the
                    same. In some cases, deletion may be accomplished through
                    de-identification of the information. If you choose to
                    delete your personal information, you may not be able to use
                    certain functions that require your personal information to
                    operate.
                  </p>
                  <p className="py-4">
                    (b){" "}
                    <span className="font-displaySemibold">
                      {" "}
                      To stop selling your personal information.
                    </span>
                    We do not sell your personal information for monetary
                    consideration. However, under some circumstances, a transfer
                    of personal information to a third party, or within our
                    family of companies, without monetary consideration may be
                    considered a “sale” under California law.
                  </p>
                  <p className="py-4">
                    If you submit a request to stop selling your personal
                    information, we will stop making such transfers. If you are
                    a California resident, to opt-out of the sale of your
                    personal information, please reach out us via email at  &nbsp;
                    <a
                          href="mailto:support@gluestack.io."
                          className="text-primary"
                        >
                          support@gluestack.io.
                        </a>
                  </p>
                  <p className="py-4">
                    Please note, if you ask us to delete or stop selling your
                    data, it may impact your experience with us, and you may not
                    be able to participate in certain programs or membership
                    services which require the usage of your personal
                    information to function. But in no circumstances, we will
                    discriminate against you for exercising your rights.
                  </p>
                  <p className="py-4">
                    To exercise your California data protection rights described
                    above, please send your request(s):
                  </p>
                  <p className="py-4">
                    By email:
                    <a
                      href="mailto:support@gluestack.io."
                      className="text-primary"
                    >
                      support@gluestack.io.
                    </a>
                  </p>
                  <p className="py-4">
                    Your data protection rights, described above, are covered by
                    the CCPA, short for the California Consumer Privacy Act. To
                    find out more, visit the official  <a className="text-primary" href="http://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">California Legislative
                    Information website</a>. The CCPA took effect on 01/01/2020.
                  </p>
                </div>
              </Text>
            </li>

            <li>
              <Heading priority="4" >
                16. Service Providers
              </Heading>

              <Text>
                <p className="py-4">
                  We may employ third party companies and individuals to
                  facilitate our Service (“Service Providers”), provide Service
                  on our behalf, perform Service-related services or assist us
                  in analysing how our Service is used.
                </p>
                <p className="py-4">
                  These third parties have access to your Personal Data only to
                  perform these tasks on our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>
                <p className="py-4">
                  The following are the list of Service Providers:
                </p>
                <span className="font-displaySemibold">DataBase</span>
                <ul className="ml-4 list-disc">
                  <li className="py-2">
                    <a href="http://digitalocean.com/" className="text-primary">
                      {" "}
                      http://digitalocean.com
                    </a>
                    : Cloud computing and data hosting services.
                  </li>
                  <li className="py-2">
                    <a href="https://www.hetzner.com/" className="text-primary">
                      https://www.hetzner.com/
                    </a>
                    : Cloud computing and data hosting services.
                  </li>
                  <li className="py-2">
                    <a href="https://geekyants.com/" className="text-primary">
                      https://geekyants.com/
                    </a>
                    : (GeekyAnts India Pvt. Ltd.): Cloud computing, data hosting
                    services, marketing, sales and support services
                  </li>
                </ul>
                <p className="py-4">
                  <span className="font-displaySemibold">CI/CD</span>
                  <ul className="ml-4 list-disc">
                    <li className="py-2">
                      <a
                        href="https://www.jenkins.io/"
                        className="text-primary"
                      >
                        https://www.jenkins.io/
                      </a>
                      :Delivery and deployment (CI/CD) automation software
                      DevOps tool.
                    </li>
                  </ul>
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">Analytics</span>
                  <ul className="ml-4 list-disc">
                    <li className="py-2">
                      <a
                        href="https://analytics.google.com/"
                        className="text-primary"
                      >
                        https://analytics.google.com
                      </a>
                      : Data analytics and business insights.
                    </li>
                  </ul>
                </p>
                <p className="py-4">
                  <span className="font-displaySemibold">
                    Data Collection/Marketing:
                  </span>
                  <ul className="ml-4 list-disc">
                    <li className="py-2">
                      <a
                        href="https://www.typeform.com/"
                        className="text-primary"
                      >
                        https://www.typeform.com/
                      </a>
                      :Data collection and reporting.
                    </li>
                    <li className="py-2">
                      <a
                        href="https://www.sendinblue.com/"
                        className="text-primary"
                      >
                        https://www.sendinblue.com
                      </a>
                      :Marketing, sales and customer management tool.
                    </li>
                    <li className="py-2">
                      <a
                        href="https://ads.google.com/"
                        className="text-primary"
                      >
                        "https://ads.google.com
                      </a>
                      :Digital marketing and remarketing.
                    </li>
                    <li className="py-2">
                      <a
                        href="https://www.hubspot.com/"
                        className="text-primary"
                      >
                        https://www.hubspot.com
                      </a>
                      :Marketing, sales and customer management tool.
                    </li>
                    <li className="py-2">
                      <a
                        href="https://www.google.com/drive/terms-of-service/"
                        className="text-primary"
                      >
                        https://www.google.com/drive/terms-of-service
                      </a>
                      :Cloud based storage service and accessibility tool.
                    </li>
                  </ul>
                </p>
                <li>
                  <Heading priority="4" >
                    17. Interactive and Public Spaces
                  </Heading>

                  <Text>
                    <p className="py-4">
                      The Service we provide may offer publicly accessible
                      blogs, community forums, comments sections, discussion
                      forums, or other interactive features etc. If you choose
                      to participate in any of these Interactive and Public
                      Spaces, please be aware that any information that you post
                      may be read, collected, and used by others who access it
                      and we are in no way liable for any risk associated with
                      the information shared by you publicly. If you wish to
                      remove your personal information from any of our
                      Interactive and Public Spaces, please contact us at
                      support@gluestack.io. We further reserve the right to
                      remove any content posted by you on any of our Interactive
                      and Public Spaces containing false, derogatory and
                      disparaging remarks.
                    </p>
                  </Text>
                </li>

                <li>
                  <Heading priority="4" >
                    18. Domain Registrations
                  </Heading>

                  <Text>
                    <p className="py-4">
                      Note that if you purchase a domain name from us, we may be
                      required to collect registrant data for the purposes of
                      domain registration and listing via the WHOIS protocol. We
                      may also be required to share this with ICANN, the
                      relevant registrars and other such providers with whom we
                      contract in order to provide our domain name services, as
                      well as when served with a legitimate request from third
                      parties. Registration data may include the domain name,
                      registrant name and contact information, and information
                      on the domain name server. Such registration data may be
                      made publicly available by ICANN.
                    </p>
                  </Text>
                </li>

                <li>
                  <Heading priority="4" >
                    19. Payments
                  </Heading>

                  <Text>
                    <p className="py-4">
                      We may provide paid products and/or services within
                      Service. In that case, we use third-party services for
                      payment processing (e.g. payment processors).
                    </p>
                    <p className="py-4">
                      We will not store or collect your payment card details.
                      That information is provided directly to our third-party
                      payment processors whose use of your personal information
                      is governed by their Privacy Policy. These payment
                      processors adhere to the standards set by PCI-DSS as
                      managed by the PCI Security Standards Council, which is a
                      joint effort of brands like Visa, Mastercard, American
                      Express and Discover. PCI-DSS requirements help ensure the
                      secure handling of payment information.
                    </p>
                    <p className="py-4">
                      The payment processors we work with are:
                    </p>
                  </Text>
                </li>
                <li>
                  <Heading priority="4" >
                    Stripe:
                  </Heading>

                  <Text>
                    <p className="py-4">
                      Their Privacy Policy can be viewed at:{" "}
                      <a
                        href="https://stripe.com/us/privacy"
                        className="text-primary"
                      >
                        https://stripe.com/us/privacy
                      </a>
                    </p>
                  </Text>
                </li>
                <li>
                  <Heading priority="4" >
                    20. Links to Other Sites
                  </Heading>

                  <Text>
                    <p className="py-4">
                      Our Service may contain links to other sites that are not
                      operated by us. This policy and procedures we describe
                      here do not apply to Third Party Sites, and links to such
                      Third Party Sites on our Services and do not imply that we
                      endorse or have reviewed the Third Party Sites. If you
                      click a third party link, you will be directed to that
                      third party&apos;s site. We strongly advise you to review the
                      Privacy Policy of every site you visit.
                    </p>
                    <p className="py-4">
                      We have no control over and assume no responsibility for
                      the content, privacy policies or practices of any third
                      party sites or services.
                    </p>
                  </Text>
                </li>

                <li>
                  <Heading priority="4" >
                    21. Children&apos;s Privacy
                  </Heading>

                  <Text>
                    <p className="py-4">
                      Our Services are not intended for use by children under
                      the age of 18 (<span className="font-displaySemibold">
                      “Child”
                    </span> or <span className="font-displaySemibold">
                    “Children”
                    </span>). We do not knowingly
                      collect personally identifiable information from Children
                      under 18. We encourage parents and legal guardians to
                      monitor their children&apos;s Internet usage and to help
                      enforce our Privacy Policy by instructing their children
                      never to provide personal details. If you become aware
                      that a Child has provided us with Personal Data, please
                      contact us. If we become aware that we have collected
                      Personal Data from Children without verification of
                      parental consent, we will take steps to remove that
                      information from our servers.
                    </p>
                  </Text>
                </li>

                <li>
                  <Heading priority="4" >
                    22. Changes to This Privacy Policy
                  </Heading>

                  <Text>
                    <p className="py-4">
                      We may update our Privacy Policy from time to time without
                      prior notice, at our sole discretion. We will notify you
                      of any changes by posting the new Privacy Policy on this
                      page.
                    </p>
                    <p className="py-4">
                      You are advised to review the Privacy Policy posted on our
                      Sites periodically for any changes. Changes to this
                      Privacy Policy are effective when they are posted on this
                      page. Your continued use of the Services after any changes
                      or revisions to this Privacy Policy shall indicate your
                      agreement with the terms of such revised Privacy Policy.
                    </p>
                  </Text>
                </li>

                <li>
                  <Heading priority="4" >
                    23. Contact Us
                  </Heading>
                  <div className="py-4">
                    <Text>
                      <p className="py-4">
                        If you have any questions about this Cookie Policy,
                        please contact us:
                      </p>
                      <p className="py-4">
                        By email:{" "}
                        <a
                          href="mailto:support@gluestack.io"
                          className="text-primary"
                        >
                          support@gluestack.io
                        </a>
                        .{" "}
                      </p>
                    </Text>
                  </div>
                </li>
              </Text>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;
