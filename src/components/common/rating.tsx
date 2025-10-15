import { Star } from "lucide-react";
import React from "react";

function Rating({ rate, total }: { rate: number; total: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((star, index) => (
        <Star
          key={index}
          width={15}
          color={rate <= index ? "#4d43e58b" : "var(--primary)"}
          fill={rate <= index ? "#4d43e58b" : "var(--primary)"}
        />
      ))}
    </div>
  );
}

export default Rating;
