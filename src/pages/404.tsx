
import Image from "next/image";
import errorPhoto from "../../public/img/404/deadlink.png"
import Layout from "@/components/layouts/Layout";
export default function Custom404() {
    return (
      <>
      <Layout>
            <div className="error-page-container">
        <Image
          className="center-404-img"
          src={errorPhoto}
          alt="404 Dead Link"
        />
      </div>
      </Layout>
      </>)
}