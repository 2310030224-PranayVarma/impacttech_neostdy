import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div classname='flex items-center justify-center h-screen'>
      <SignIn/>
    </div>
)
}