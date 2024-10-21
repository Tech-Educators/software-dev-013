import { fetchData } from "@/utils/fetchData"

export default async function Home() {

  type Post = {
    userId: number,
    id: number,
    title: string,
    body: string 
  }

  type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

  const posts = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts')
  const todos = await fetchData<Todos[]>('https://jsonplaceholder.typicode.com/todos')


  console.log(todos)
  console.log(posts)
  return (
    <div>      
    </div>
  )
}


// type dog = 'darcy' | 'charlie'


// closure
// @ts-ignore
function a(a) {
  // @ts-ignore
  return function(b) {
    return a + b
  }
}
