import { Link, useNavigate } from "react-router-dom";
import { MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PageHeader } from "@/components/page-header";

interface Question {
  id: string;
  order: number;
  question: string;
  type: "text" | "yes_no" | "select" | "date" | "number";
  section: string;
  parentId?: string;
}

const dummyQuestions: Question[] = [
  { id: "Q001", order: 1, question: "What is your company's legal name?", type: "text", section: "Company Info" },
  { id: "Q002", order: 2, question: "Do you have a safety program in place?", type: "yes_no", section: "Safety" },
  { id: "Q002a", order: 3, question: "Please describe your safety program", type: "text", section: "Safety", parentId: "Q002" },
  { id: "Q002b", order: 4, question: "When was it last updated?", type: "date", section: "Safety", parentId: "Q002" },
  { id: "Q003", order: 5, question: "How many employees do you have?", type: "number", section: "Company Info" },
  { id: "Q004", order: 6, question: "Select your primary industry", type: "select", section: "Company Info" },
  { id: "Q005", order: 7, question: "Do you carry general liability insurance?", type: "yes_no", section: "Insurance" },
  { id: "Q005a", order: 8, question: "What is your coverage amount?", type: "number", section: "Insurance", parentId: "Q005" },
  { id: "Q006", order: 9, question: "What year was your company founded?", type: "number", section: "Company Info" },
  { id: "Q007", order: 10, question: "Do you have any safety certifications?", type: "yes_no", section: "Certifications" },
  { id: "Q007a", order: 11, question: "List your certifications", type: "text", section: "Certifications", parentId: "Q007" },
];

const typeLabels: Record<Question["type"], string> = {
  text: "Text",
  yes_no: "Yes/No",
  select: "Select",
  date: "Date",
  number: "Number",
};

export default function QuestionsPage() {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate(`/questionnaire-config/questions/${id}`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Questions"
        actions={
          <Button asChild>
            <Link to="/questionnaire-config/questions/new">
              <Plus className="size-4" />
              Add Question
            </Link>
          </Button>
        }
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Question</TableHead>
              <TableHead className="w-32">Section</TableHead>
              <TableHead className="w-24">ID</TableHead>
              <TableHead className="w-24">Type</TableHead>
              <TableHead className="w-32">Parent</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyQuestions.map((q) => (
              <TableRow
                key={q.id}
                className="cursor-pointer"
                onClick={() => handleRowClick(q.id)}
              >
                <TableCell className="text-muted-foreground text-center">
                  {q.order}
                </TableCell>
                <TableCell>{q.question}</TableCell>
                <TableCell className="text-muted-foreground">
                  {q.section}
                </TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">
                  {q.id}
                </TableCell>
                <TableCell>{typeLabels[q.type]}</TableCell>
                <TableCell>
                  {q.parentId ? (
                    <Link
                      to={`/questionnaire-config/questions/${q.parentId}`}
                      className="font-mono text-sm text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {q.parentId}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={`/questionnaire-config/questions/${q.id}`}>
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
