import { icons } from "@assets/assets";

function ArticleCard() {
  return (
    <div className="min-h-80">
      <div className="flex items-center gap-4">
        {<icons.Eraser size={20} color={"#FF4938"} />}
        <h4 className="text-lg font-semibold">Processed Image</h4>
      </div>

      <div className="mx-auto mt-16 space-y-6 text-center">
        <icons.Eraser size={40} color="#64748B80" className="mx-auto" />
        <p className="text-sm text-zinc-400">
          Upload an image and click &quot;Remove Background&quot;to get started
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
