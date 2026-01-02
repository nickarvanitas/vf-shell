import { useParams } from "react-router-dom";
import { PageHeaderBack } from "@/components/page-header-back";

export default function EditQuestionPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-6">
      <PageHeaderBack
        title={`Edit Question ${id}`}
        backTo="/questionnaire-config/questions"
      />

      <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
        <p className="text-muted-foreground">
          Question form for {id} will go here.
        </p>
      </div>
    </div>
  );
}

