import ClientForm from "@/components/ClientForm"
import ServerForm from "@/components/ServerForm"

export default function Home() {

  // server action
  async function handleAddMessage(data: {message: string}) {
    'use server'
    // add my message to the database over here.
    console.log('Running on the server')
  }
  return (
    <div>
      <h2>Server form: </h2>
      <ServerForm></ServerForm>
      <br />
      <h2>Client form:</h2>
      <ClientForm handleAddMessage={handleAddMessage}></ClientForm>
    </div>
  )
}