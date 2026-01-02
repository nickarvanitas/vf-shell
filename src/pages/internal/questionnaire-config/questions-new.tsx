import { PageHeaderBack } from "@/components/page-header-back";

export default function NewQuestionPage() {
  return (
    <div className="space-y-6">
      <PageHeaderBack
        title="Add Question"
        backTo="/questionnaire-config/questions"
      />

      <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
        <p className="text-muted-foreground">
          Question form will go here.
        </p>
      </div>
    </div>
  );
}
