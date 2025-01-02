// app/doctors/[id]/page.js (Server Component)
import DoctorProfile from "./DoctorProfile";

export default function DoctorPage({ params }) {
  return <DoctorProfile doctorId={params.id} />;
}
