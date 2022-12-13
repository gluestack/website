import Image from "next/image";
import React from "react";
import Heading from "../../elements/Heading";
import databaseimg from "public/icon/database.svg";
import queuesimg from "/public/icon/queues.svg";
import websocket from "/public/icon/websocket.svg";
import auth from "/public/icon/auth.svg";
import List from "../../components/List";

function Services() {
  return (
    <>
      <div className="relative overflow-hidden ">
        <span className="hidden absolute bg-gradient-to-l from-primary opacity-[.15] pointer-events-none lg:inline-flex right-[-20%] top-0 w-[640px] h-[640px]"></span>
        <div className="container py-16 mx-auto">
          <div className="">
            <div className="lg:w-5/12">
              <Heading
                isLight={undefined}
                color={undefined}
                priority={2}
              >
                Everything you need to be amazing.
              </Heading>
            </div>
            <div className="service_grid">
              <List src={databaseimg} title="Database">
                {" "}
                Laravel's{" "}
                <a className="underline" href="/docs/eloquent">
                  "Eloquent" ORM
                </a>{" "}
                provides best-in-class database abstraction without the
                headaches. Query and update your data without breaking a sweat.
                Eloquent pairs perfectly with MySQL, Postgres, SQLite, and SQL
                Server.
              </List>
              <List src={queuesimg} title="Queues">
                {" "}
                Dispatch background jobs to perform slow tasks like sending
                emails and generating reports while maintaining blazing fast
                response times. Laravel's{" "}
                <a className="underline" href="/docs/queues">
                  robust queue system
                </a>{" "}
                can process jobs using Redis, Amazon SQS, or even MySQL and
                Postgres.
              </List>
              <List src={websocket} title="WebSockets">
                {" "}
                <a className="underline" href="/docs/broadcasting">
                  Laravel Echo
                </a>
                and event broadcasting make it a cinch to build modern, realtime
                user experiences. Create amazing realtime applications while
                powering your WebSockets with pure PHP, Node.js, or serverless
                solutions like
                <a className="underline" href="https://pusher.com">
                  Pusher
                </a>
                and
                <a className="underline" href="https://ably.com">
                  Ably
                </a>
                .
              </List>

              <List src={auth} title="Authentication">
                Stop sweating authentication. Laravel provides scaffolding for
                secure, session based authentication, while{" "}
                <a className="underline" href="/docs/sanctum">
                  Laravel Sanctum
                </a>{" "}
                provides painless authentication for APIs and mobile
                applications.
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
