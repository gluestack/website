import React from "react";
import Image from "next/image";

import CustomImage from "../../components/CustomImage";
import CardImg from "../../public/images/cardImg.png";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";
import Card from "../../components/Card";

// Card Icons
import AuthIcon from "../../public/images/cardIcons/auth.svg";
import CronIcon from "../../public/images/cardIcons/cron.svg";
import DaprIcon from "../../public/images/cardIcons/dapr.svg";
import HasuraIcon from "../../public/images/cardIcons/hasura.svg";
import JobsIcon from "../../public/images/cardIcons/jobs.svg";
import NextIcon from "../../public/images/cardIcons/next.svg";
import ReactNativeIcon from "../../public/images/cardIcons/reactNative.svg";
import StorageIcon from "../../public/images/cardIcons/storage.svg";
import StoryBookIcon from "../../public/images/cardIcons/storybook.svg";

import GradientImg from "../../public/images/gradient.png";

function CardsSection() {
  return (
    <div className="relative w-full pt-20 sm:pt-40">
         <div className="absolute top-[600px] left-0 w-full -z-10 h-full">
            <Image src={GradientImg} alt="image" objectFit="contain"  />
        </div>
        <div className="bg-primary-200 pt-10 max-h-[500px] sm:max-h-[400px] lg:max-h-[450px] xl:max-h-[500px]">
          <div className="container pt-10 pb-12 relative ">
            <div className="sm:max-w-[620px] m-auto">
                <Heading priority={3} style="text-white text-center mb-10">
                    Adopting the best, but with no lock-in.
                </Heading>
                <Text  style="text-white text-center font-display">
                        gluestack makes app development faster by recommending the best stacks (yes, these are our opinions) while being configurable enough to add custom plugins to solve specific use-cases.
                </Text>
            </div>
            <div className="grid bg-white shadow-md py-5 px-20 mt-10 rounded-md">
                <CustomImage  src={CardImg}  alt="image"  />
            </div> 
          </div>
        </div>
        <div className="container pt-5 sm:pt-40 lg:pt-50 xl:pt-60 pb-10 md:pb-20">
          <div className="grid gap-12 py-12 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card  type="hasIcon"
                  src={NextIcon}
                  altText="next js"
                  title="web (React with Next.js)" 
                  description="A powerful framework for building server-rendered React applications with features such as code-splitting and automatic optimization." 
            />
            <Card  type="hasIcon"
                  src={ReactNativeIcon}
                  altText="React Native"
                  title="mobile (React Native)" 
                  description="Allows you to build native mobile apps using JavaScript, leveraging the power and simplicity of the React framework." 
            />
            <Card  type="hasIcon"
                  src={StoryBookIcon}
                  altText="StoryBook"
                  title="storybook (Universal components)" 
                  description="Build, test, and document your app's UI components in isolation, providing a flexible and efficient workflow." 
            />
            <Card  type="hasIcon"
                  src={AuthIcon}
                  altText="Auth"
                  title="auth" 
                  description="Allows you to securely manage user authentication and authorization, providing a reliable away to protect sensitive data and resources." 
            />
            <Card  type="hasIcon"
                  src={HasuraIcon}
                  altText="Hasura"
                  title="graphql (Hasura)" 
                  description="Easily build and scale your app's data layer, providing a powerful API for your clients and a fast and efficient database management system." 
            />
            <Card  type="hasIcon"
                  src={DaprIcon}
                  altText="Dapr"
                  title="functions (Dapr)" 
                  description="Helps you create cloud-native functions with a runtime environment that scales and a set of tools and libraries for deploying and managing your functions." 
            />
            <Card  type="hasIcon"
                  src={StorageIcon}
                  altText="Storage"
                  title="storage" 
                  description="Effectively manage and store data in your app to handle large volumes of data and ensure data integrity." 
            />
            <Card  type="hasIcon"
                  src={JobsIcon}
                  altText="Jobs"
                  title="jobs" 
                  description="Helps you perform tasks asynchronously in the background, providing a way to handle tasks that may require a lot of time or external resources." 
            />
            <Card  type="hasIcon"
                  src={CronIcon}
                  altText="Cron"
                  title="cron" 
                  description="Schedule tasks and automate processes in your app, providing a convenient way to manage and run repetitive tasks on a regular basis." 
            />
          </div>
        </div>
    </div>
  );
}

export default CardsSection;
