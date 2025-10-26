import { icons } from "@assets/assets";

function ArticleCard() {
  return (
    <div className="min-h-80">
      <div className="flex items-center gap-4">
        {<icons.Hash size={20} color={"#8E37EB"} />}
        <h4 className="text-lg font-semibold">Generated Article</h4>
      </div>
      <div className="mx-auto mt-16 space-y-6">
        <icons.Hash size={40} color="#64748B80" className="mx-auto" />
        <p className="text-sm text-zinc-400">
          Enter keywords and click &quot;Generate Titles&quot; to get started
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
