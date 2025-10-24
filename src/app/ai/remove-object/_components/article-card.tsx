import { Input } from "@/components/ui/input";
import { icons } from "@assets/assets";

function ArticleCard() {
  return (
    <div className="min-h-80">
      <div className="flex items-center gap-4">
        {<icons.Scissors size={20} color={"##437AF5"} />}
        <h4 className="text-lg font-semibold">Processed Image</h4>
      </div>
      <div className="mx-auto mt-16 space-y-6 text-center">
        <icons.Scissors size={40} color="#64748B80" className="mx-auto" />
        <p className="text-sm text-zinc-400">Upload an image and describe what to remove</p>
      </div>
    </div>
  );
}

export default ArticleCard;
