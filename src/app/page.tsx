import { redirect } from "next/navigation";


export default function Home() {
  // No parentheses around folder name
  // redirect('./pages/WelcomePage');

  // With parentheses around folder name
  redirect('./WelcomePage');
}
