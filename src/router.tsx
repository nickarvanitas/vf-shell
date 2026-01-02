import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout";

// Dashboard
import DashboardPage from "@/pages/dashboard";

// Internal
import QuestionnaireConfigPage from "@/pages/internal/questionnaire-config";
import QuestionsPage from "@/pages/internal/questionnaire-config/questions";
import SectionsPage from "@/pages/internal/questionnaire-config/sections";
import NewQuestionPage from "@/pages/internal/questionnaire-config/questions-new";
import EditQuestionPage from "@/pages/internal/questionnaire-config/questions-edit";
import SupplyChainsPage from "@/pages/internal/supply-chains";
import ProcessAutomationPage from "@/pages/internal/process-automation";
import OrganizationsPage from "@/pages/internal/organizations";
import OrganizationFeaturesPage from "@/pages/internal/organization-features";
import UsersAdminPage from "@/pages/internal/users";
import AdminReportsPage from "@/pages/internal/reports";

// Operator
import ContractorsPage from "@/pages/operator/contractors";
import ContractorSupplyChainsPage from "@/pages/operator/contractors/supply-chains";
import ContractorConnectionsPage from "@/pages/operator/contractors/connections";
import ScorecardsPage from "@/pages/operator/contractors/scorecards";
import BusinessUnitsPage from "@/pages/operator/contractors/business-units";
import TagsPage from "@/pages/operator/contractors/tags";
import TrainingStandardsPage from "@/pages/operator/contractors/training-standards";

// Contractor
import CompanyPage from "@/pages/contractor/company";
import ConnectionsPage from "@/pages/contractor/connections";
import AssessmentsPage from "@/pages/contractor/assessments";
import SubcontractorsPage from "@/pages/contractor/subcontractors";

// Shared
import DocumentsPage from "@/pages/shared/documents";
import ReportsPage from "@/pages/shared/reports";
import ComplianceReportsPage from "@/pages/shared/reports/compliance";
import CustomReportsPage from "@/pages/shared/reports/custom";
import TrainingPage from "@/pages/shared/training";
import TrainingCompliancePage from "@/pages/shared/training/compliance";
import TrainingTrackerPage from "@/pages/shared/training/tracker";

// Apps
import VerisourcePage from "@/pages/apps/verisource";
import COQPage from "@/pages/apps/verisource/coq";
import EOQPage from "@/pages/apps/verisource/eoq";
import WorkerPassPage from "@/pages/apps/workerpass";
import MyPassPage from "@/pages/apps/workerpass/my-pass";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Dashboard
      { index: true, element: <DashboardPage /> },
      { path: "dashboard", element: <DashboardPage /> },

      // Internal
      { path: "questionnaire-config", element: <QuestionnaireConfigPage /> },
      { path: "questionnaire-config/questions", element: <QuestionsPage /> },
      { path: "questionnaire-config/questions/new", element: <NewQuestionPage /> },
      { path: "questionnaire-config/questions/:id", element: <EditQuestionPage /> },
      { path: "questionnaire-config/sections", element: <SectionsPage /> },
      { path: "supply-chains", element: <SupplyChainsPage /> },
      { path: "process-automation", element: <ProcessAutomationPage /> },
      { path: "organizations", element: <OrganizationsPage /> },
      { path: "organization-features", element: <OrganizationFeaturesPage /> },
      { path: "users", element: <UsersAdminPage /> },
      { path: "admin/reports", element: <AdminReportsPage /> },

      // Operator - Contractors
      { path: "contractors", element: <ContractorsPage /> },
      { path: "contractors/supply-chains", element: <ContractorSupplyChainsPage /> },
      { path: "contractors/connections", element: <ContractorConnectionsPage /> },
      { path: "contractors/scorecards", element: <ScorecardsPage /> },
      { path: "contractors/business-units", element: <BusinessUnitsPage /> },
      { path: "contractors/tags", element: <TagsPage /> },
      { path: "contractors/training-standards", element: <TrainingStandardsPage /> },

      // Contractor
      { path: "company", element: <CompanyPage /> },
      { path: "connections", element: <ConnectionsPage /> },
      { path: "assessments", element: <AssessmentsPage /> },
      { path: "subcontractors", element: <SubcontractorsPage /> },

      // Shared
      { path: "documents", element: <DocumentsPage /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "reports/compliance", element: <ComplianceReportsPage /> },
      { path: "reports/custom", element: <CustomReportsPage /> },
      { path: "training", element: <TrainingPage /> },
      { path: "training/compliance", element: <TrainingCompliancePage /> },
      { path: "training/tracker", element: <TrainingTrackerPage /> },

      // Apps - Verisource
      { path: "apps/verisource", element: <VerisourcePage /> },
      { path: "apps/verisource/coq", element: <COQPage /> },
      { path: "apps/verisource/eoq", element: <EOQPage /> },

      // Apps - Worker Pass
      { path: "apps/workerpass", element: <WorkerPassPage /> },
      { path: "apps/workerpass/home", element: <WorkerPassPage /> },
      { path: "apps/workerpass/my-pass", element: <MyPassPage /> },


      // Help
      { path: "help", element: <div className="space-y-6"><h1 className="text-3xl font-bold">Help</h1><p className="text-muted-foreground">Get help and support.</p></div> },
    ],
  },
]);

