import { Header } from "../../components/Header";
import React from "react";
import { Sidebar } from "../../components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Dashboard } from "../../components/Dashboard";

export const Docs = () => {
  return (
    <div className={styles.container}>
      <main className="">
        <Header />
        <div className="flex-row ">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4">
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Docs;
