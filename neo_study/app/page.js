<<<<<<< HEAD
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <h2>Neo Study</h2>
      <Button>Click</Button>
=======
import {Button} from '@components/ui/button'
import {UserButton} from '@clerk/next.js'
export default function Home() {
  return (
    <div>
      <h2>Subscibe to Tech</h2>
      <Button variant="ghost">Subscibe</Button>
      <UserButton/>
>>>>>>> bb7bdfa (mycommit)
    </div>
  );
}
