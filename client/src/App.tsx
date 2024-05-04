import { BodyComponent } from "./components/body";
import { FooterComponent } from "./components/footer";
import HeaderComponent from "./components/header";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent className="flex-shrink-0" />
      <BodyComponent className="flex-grow mt-8" />
      <FooterComponent className="flex-shrink-0 mb-8" />
    </div>
  )
}
