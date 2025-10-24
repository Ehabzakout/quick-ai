import React from "react";
import AICard from "../_components/ai-card";
import WriteArticleForm from "./_components/form";
import ArticleCard from "./_components/article-card";

function page() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <AICard>
        <WriteArticleForm />
      </AICard>
      <AICard>
        <ArticleCard />
      </AICard>
    </div>
  );
}

export default page;
