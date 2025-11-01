import React from "react";
import AICard from "../_components/ai-card";

import ArticleCard from "./_components/article-card";
import ReviewResume from "./_components/form";

function page() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <AICard>
        <ReviewResume />
      </AICard>
      <AICard>
        <ArticleCard />
      </AICard>
    </div>
  );
}

export default page;
