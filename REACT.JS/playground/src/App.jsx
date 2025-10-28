import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TrustedBrands from "./TrustedBrands";
function App(){
  const trustedBrands=[
    {
      id:1,
      logo:"st"
    },
    {
      id:2,
      logo:"Ryzer"
    },
    {
      id:3,
      logo:"Google"
    }
  ]
  return(
    <>
    <Header/>
    <Hero/>
    <TrustedBrands trustedBrands={trustedBrands}/>
    <Footer/>
    </>
  )
}
export default App;