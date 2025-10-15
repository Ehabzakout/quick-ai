import React from "react";

function page({ params }: { params: { tool: string } }) {
  return <div>page {params.tool}</div>;
}

export default page;
