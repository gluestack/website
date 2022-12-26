import React from "react";
import FooterBg from "../../public/images/footerBg.svg";
import Text from "../../elements/Text";
import Heading from "../../elements/Heading";
import Button from "../../components/Button";
import CustomImage from "../../components/CustomImage";

function SignupFooter() {
  return (
    <div className="relative w-full bg-primary-200 py-20 ">
       <div className="absolute top-0 right-0 z-1 w-[100px] sm:w-[150px] xl:w-[250px]">
            <CustomImage src={FooterBg} alt="Footer Background" />
          </div>
        <div className="container items-center justify-center flex flex-col flex-1 py-5">
          <div className="text:white text-center mb-2">
                <Heading priority={3} primaryBg>Let's build the future!</Heading>
            </div>
            <div className="flex flex-row items-center mt-2 mb-10">
              <div className="sm:w-[500px] text-center">
                  <Text size="md" white >We have opened up the waitlist for developer preview, be the first one to test it out and help us build the future.</Text>
              </div>
            </div>
            <Button type="secondary" white dataId="QWcoG0YF">
                Get early access
            </Button>
        </div>
    </div>
  )
}

export default SignupFooter;
