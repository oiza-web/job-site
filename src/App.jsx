import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import JobsPage from "../src/pages/JobsPage";
import AddJobPage from "../src/pages/AddJobPage";
import JobPage, { jobLoader } from "../src/pages/JobPage";
import MainLayout from "../src/layouts/MainLayout";
import NotFoundPage from "../src/pages/NotFoundPage";

// Add new Job
const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return res;
};

// Delete job
const deleteJob = async (jobId) => {
  console.log(jobId);
  const res = await fetch(`/api/jobs/${jobId}`, {
    method: "DELETE",
  });
  return res;
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route
        loader={jobLoader}
        path="/jobs/:id"
        element={<JobPage deleteJob={deleteJob} />}
      />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
