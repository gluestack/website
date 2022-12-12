import React from "react";
import SubBanner from "../../components/SubBanner";
import vscode from "/public/images/vscode.png";
import stepsimg from '/public/images/monolith.png'

function SubSection() {
  return (
    <>
      <SubBanner
        isright
        heading="Write code for the joy of it."
        desc="Laravel values beauty. We love clean code just as much as
                    you do. Simple, elegant syntax puts amazing functionality at
                    your fingertips. Every feature has been thoughtfully
                    considered to provide a wonderful developer experience."
        src={vscode}
        btntext='START LEARING'
      />
      <SubBanner
        heading="Monolith or API — the choice is yours."
        desc="Build robust, full-stack applications in PHP using Laravel and Livewire. Love JavaScript? Build a monolithic React or Vue driven frontend by pairing Laravel with Inertia.
        Or, let Laravel serve as a robust backend API for your Next.js application, mobile application, or other frontend. Either way, our starter kits will have you productive in minutes."
        src={stepsimg}
        btntext='START KITS'
      />
    </>
  );
}

export default SubSection;
