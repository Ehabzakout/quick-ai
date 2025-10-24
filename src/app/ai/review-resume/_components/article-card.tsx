import { Input } from "@/components/ui/input";
import { icons } from "@assets/assets";

function ArticleCard() {
  return (
    <div className="min-h-80">
      <div className="flex items-center gap-4">
        {<icons.FileText size={20} color={"#00DA83"} />}
        <h4 className="text-lg font-semibold">Analysis Results</h4>
      </div>
      <div className="mx-auto mt-16 space-y-6 text-center">
        <icons.FileText size={40} color="#64748B80" className="mx-auto" />
        <p className="text-sm text-zinc-400">
          Upload your resume and click &quot;Review Resume&quot; to get started
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
