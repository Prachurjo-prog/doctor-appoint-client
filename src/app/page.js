import Hero from "@/Components/Hero";
import HospitalServices from "@/Components/HospitalServices";
import PatientTestimonial from "@/Components/PatientTestimonial";
import TopRatedDoctors from "@/Components/TopRatedDoctor";


export default function Home() {
  return (
    <div>
      <Hero/>
      <TopRatedDoctors/>
      <HospitalServices/>
      <PatientTestimonial/>
    </div>
  );
}
