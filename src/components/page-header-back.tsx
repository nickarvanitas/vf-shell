import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderBackProps {
  title: string;
  backTo: string;
}

export function PageHeaderBack({ title, backTo }: PageHeaderBackProps) {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon" asChild>
        <Link to={backTo}>
          <ArrowLeft className="size-4" />
          <span className="sr-only">Back</span>
        </Link>
      </Button>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}

