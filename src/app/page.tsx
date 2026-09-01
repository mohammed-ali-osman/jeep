import Header from "@/components/layout/Header"

export default function app() {
  return (
    <>
      <Header isAuthenticated={true} />
      <main><p>Hello</p></main>
    </>
  )
}