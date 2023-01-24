import data from "../../versions.json";

export default function() {}

//@ts-ignore
let firstPage = data.firstPage;
export async function getServerSideProps(context: any) {
  return {
    redirect: {
      permanent: true,
      destination: context.resolvedUrl + "/" + "0.1.x/" + firstPage,
    },
  };
}
