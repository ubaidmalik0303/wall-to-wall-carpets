import React from "react";
import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import SideImage from "../../components/SideImage";
import * as styles from "../../styles/wall-to-wall-carpets.module.css";
import ContentByNumber from "../../components/ContentByNumber";

const index = () => {
  return (
    <Layout>
      <div className={`themeBgColor py-5 ${styles.wallToWallCarpets}`}>
        <div className="container">
          <div className="py-4">
            <Heading>Wall To Wall Carpets</Heading>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            eligendi minima magni ratione, quam illum nemo magnam eius, nulla at
            quia eos? Molestiae hic unde laborum temporibus suscipit. Maxime,
            quam. Placeat in quasi veniam pariatur rem hic magni tempore esse.
            Hic dignissimos aut vel exercitationem vitae natus nesciunt nulla
            ipsam, quos deleniti, quia consectetur ipsa laborum. Nam beatae
            atque porro? Cumque earum illo vero dolor est error maxime doloribus
            molestias nisi optio recusandae rem fuga assumenda illum, tempore
            eligendi suscipit doloremque cupiditate quae harum nam iusto? Nihil
            recusandae dolores perspiciatis! Fugit temporibus asperiores
            sapiente alias, assumenda sint saepe. Molestias, accusamus?
            Architecto tempora voluptate et recusandae? Ratione possimus tenetur
            quas sit nisi velit, ab harum, suscipit saepe asperiores natus
            doloribus maiores. Libero, deleniti nam? Sed consequuntur ipsa
            veniam nam culpa doloremque tempore aliquid neque quis itaque nihil
            quas explicabo repudiandae error, doloribus qui quo reiciendis!
            Quaerat necessitatibus omnis temporibus optio ut.
          </p>
        </div>
        <SideImage
          image={
            <img
              src="https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg"
              width={350}
              height={400}
            />
          }
        >
          <ContentByNumber />
        </SideImage>
        <div className={`container-fluid themeBgColorSecond py-5`}>
          <div className="container">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
