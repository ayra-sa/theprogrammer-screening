import Hero from "@/components/sections/hero";
import Supporting from "@/components/sections/supporting";
import Finally from "@/components/sections/finally";
import Services from "@/components/sections/services";
import Concentrate from "@/components/sections/concentrate";
import Circle from "@/components/sections/circle";
import Useful from "@/components/sections/useful";
import Join from "@/components/sections/join";
import Layout from "@/components/layouts/layout";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Supporting />
      <Finally />
      <Services />
      <Concentrate />
      <Circle />
      <Useful />
      <Join />
    </Layout>
  )
}
