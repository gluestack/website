import React from "react";
import Author from "../../components/Author";
import Heading from "../../elements/Heading";
import Layout from "../../Layout/Layout";
import { FaGithub } from "react-icons/fa";
import Button from "../../components/Button";
import Text from "../../elements/Text";
import Description from "../../elements/Description";
import Image from "next/image";
import smallCard from "../../public/showcase/smallShowCase.svg";
import Card from "../../components/Card";
import Tags from "../../components/Tags";
import profileImg from "../../public/blog/Ellipse 1682person.svg";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

function SingleShowCase() {
  return (
    <div>SingleShowCase</div>
  )
}

export default SingleShowCase