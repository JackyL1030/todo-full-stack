import { useEffect } from "react"

export default function App() {

  async function test() {
    fetch();
  }

  useEffect(() => {
    // test();
  }, []);

  return (
    <div>
      Hello World!
    </div>
  )
}