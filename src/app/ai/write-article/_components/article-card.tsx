import { icons } from "@assets/assets";

function ArticleCard() {
  return (
    <div className="min-h-80">
      <div className="flex items-center gap-4">
        {<icons.SquarePen size={20} color={"#226BFF"} />}
        <h4 className="text-lg font-semibold">Generated Article</h4>
      </div>
      <div className="mx-auto mt-16 space-y-6 text-center">
        <icons.SquarePen size={40} color="#64748B80" className="mx-auto" />
        <p className="text-sm text-zinc-400">
          Enter a topic and click “Generate article ” to get started
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
