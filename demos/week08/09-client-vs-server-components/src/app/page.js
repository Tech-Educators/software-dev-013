import Counter from "@/components/Counter"

export default function Home() {

  console.log('running on the server...')
  return (
    <div>
      <p>this is running on the server!!</p>
        <Counter />
      <p>this is also running on the server</p>
    </div>
  )
}