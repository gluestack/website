export default function () {}
  import data from "./versions.json";
  
  let firstPage = data.firstPage;
  export async function getServerSideProps(context: any) {
    return {
      redirect: {
        permanent: true,
        destination: firstPage,
      },
    };
  }
  