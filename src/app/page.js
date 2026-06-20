import Hero from "@/Components/Hero";
import HospitalServices from "@/Components/HospitalServices";
import TopRatedDoctors from "@/Components/TopRatedDoctor";


export default function Home() {
  return (
    <div>
      <Hero/>
      <TopRatedDoctors/>
      <HospitalServices/>
    </div>
  );
}
