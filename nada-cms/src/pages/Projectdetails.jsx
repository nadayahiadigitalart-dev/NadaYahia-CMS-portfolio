import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Supabase } from "../Supabase";
import Project_details from "../components/Proj_details";

const Projectdetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await Supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setProject(data);
    }

    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <Project_details
    //   project={project}
    />
  );
};

export default Projectdetails;
