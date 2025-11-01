import { getPublishedCreations } from "@/lib/api/get-creations";

import React from "react";

import CreationItem from "./_components/creation-item";

export default async function page() {
  const { creations }: { creations: Creation[] } = await getPublishedCreations();

  return (
    <>
      <h1 className="text-blue mb-5 text-xl">Published: </h1>
      {creations.length ? (
        <div className="flex flex-wrap gap-5">
          {creations.map((creation) => (
            <React.Fragment key={creation.id}>
              <CreationItem {...creation} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">There are no creations published</p>
      )}
    </>
  );
}
