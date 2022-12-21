import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getPrevNextPage } from "../../lib/docs/utils";

export const PrevNextButtons = (props: any) => {
  const router = useRouter();
  const prevNextPage = getPrevNextPage(router.route);

  return (
    // <div className="content-body text-black w-full flex-1 h-full">

    <div className="flex items-center w-full justify-between">
      {prevNextPage.prev ? (
        <Link href={"/docs/0.1.x/" + prevNextPage.prev}>
          <div className="py-12">Previous</div>
        </Link>
      ) : (
        <p></p>
      )}
      {prevNextPage.next ? (
        <Link href={"/docs/0.1.x/" + prevNextPage.next}>
          <div className="py-12">Next</div>
        </Link>
      ) : (
        <p></p>
      )}
    </div>
    // </div>
  );
};
