import Header from "./components/header"
import Body from "./components/body"
import About from "./components/about"
export default function App() {
  return (
    <div >
      <div className="flex flex-col min-h-screen">
      <Header />
    <Body />
    </div>
<About />
    </div>
  )
}
