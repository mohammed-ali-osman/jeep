import Header from "@/components/layout/Header"
import Main from "@/components/layout/Main"
import Footer from "@/components/layout/Footer"

export default function app() {
  return (
    <>
      <Header isAuthenticated={false} />
      <Main />
      <Footer />
    </>
  )
}