import React from "react";
import * as styles from "../styles/about.module.css";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import SideImage from "../components/SideImage";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Handyman from "../images/handyman.jpg";

const about = () => {
  return (
    <Layout>
      <div className={`container-fluid themeBgColor ${styles.about}`}>
        <div className="container py-5" data-aos="fade-up">
          <div className="my-5">
            <Heading>About Our Company</Heading>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            natus temporibus nisi. Sunt itaque obcaecati recusandae odio fugiat
            id, magni non laudantium, quis quod modi porro vero sint ab
            eligendi? Nobis fugiat itaque ab labore eius adipisci est iste
            delectus, velit praesentium vero, repellendus quia placeat omnis sit
            porro. Eveniet, recusandae rerum quasi excepturi nostrum totam
            voluptate neque quia vero. Dignissimos laborum quia eius modi est
            error repellat placeat, et magnam voluptatibus. Libero vel qui
            debitis officiis praesentium deserunt eum repudiandae autem, officia
            distinctio, dolores saepe reprehenderit quibusdam quas molestiae.
            Quae in deserunt magni accusamus deleniti placeat voluptatem nihil,
            repudiandae excepturi quo, magnam quibusdam. Dolorum rem eaque
            sapiente iste esse odio earum enim possimus modi dolore, debitis,
            non, accusantium magni! Nesciunt velit explicabo non? Vitae
            consequuntur tempora quos magnam quo! Doloremque quae magni nam
            optio culpa vel repellendus eius aliquid delectus architecto eos
            debitis, quidem corporis quis voluptatum eveniet eligendi.
          </p>
          <div className={styles.aboutContactIcons}>
            <a href="">
              <FaPhoneAlt />
              +971 55 472 2980
            </a>
            <a href="">
              <FaWhatsapp />
              +971 55 472 2980
            </a>
            <a href="">
              <FaEnvelope />
              info@walltowallcarpets.ae
            </a>
          </div>
        </div>
        <div className="container py-5">
          <Heading>Fast & Reliable Transport</Heading>
          <SideImage
            right
            image={
              <img
                src="https://fixitdesign.ae/wp-content/uploads/2021/06/Official-Van-1024x502-min_813x398-2.webp"
                width="100%"
                height={200}
              />
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum hic
              molestiae magnam quod nisi at quam cum expedita libero, debitis
              reiciendis excepturi doloribus deleniti officiis ipsa non ipsum.
              Voluptate, similique.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eum hic molestiae magnam quod nisi at quam cum
              expedita libero, debitis reiciendis excepturi doloribus deleniti
              officiis ipsa non ipsum. Voluptate, similique.Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Eum hic molestiae magnam
              quod nisi at quam cum expedita libero, debitis reiciendis
              excepturi doloribus deleniti officiis ipsa non ipsum. Voluptate,
              similique.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eum hic molestiae magnam quod nisi at quam cum expedita libero,
              debitis reiciendis excepturi doloribus deleniti officiis ipsa non
              ipsum. Voluptate, similique.
            </p>
          </SideImage>
        </div>

        <div className="container py-5">
          <Heading>Quality Installation</Heading>
          <SideImage image={<img src={Handyman} width="100%" height={400} />}>
            <h4>Step 1.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              dolorem mollitia. Esse ab quasi dolore praesentium accusamus id et
              excepturi? Voluptas repudiandae nesciunt fugiat repellat quia
              quasi laboriosam vero provident.
            </p>
            <h4>Step 2.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              dolorem mollitia. Esse ab quasi dolore praesentium accusamus id et
              excepturi? Voluptas repudiandae nesciunt fugiat repellat quia
              quasi laboriosam vero provident.
            </p>
            <h4>Step 3.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              dolorem mollitia. Esse ab quasi dolore praesentium accusamus id et
              excepturi? Voluptas repudiandae nesciunt fugiat repellat quia
              quasi laboriosam vero provident.
            </p>
          </SideImage>
        </div>
      </div>
    </Layout>
  );
};

export default about;
