import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Curabitur faucibus congue faucibus. Proin ultricies tortor in
              pharetra euismod. Quisque ut lorem at quam pulvinar tristique et
              sagittis velit. Maecenas ultrices mauris sit amet libero
              porttitor, vitae commodo est dignissim. Mauris in venenatis
              turpis. Nam sagittis eleifend suscipit. In venenatis eros massa,
              quis luctus dolor ultricies eu. Quisque et felis nulla. Aliquam et
              accumsan ipsum.
            </p>
            <p>
              Donec id eleifend enim. Donec maximus risus nec massa accumsan, id
              mollis est dictum. Fusce dapibus cursus neque suscipit mattis.
              Suspendisse potenti. Aenean tempor accumsan enim eget sodales.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Aliquam ac pretium arcu. Fusce quis
              elementum risus. Quisque rhoncus nibh nec nisl suscipit pretium.
              Fusce dignissim, sem eu semper venenatis, arcu lectus condimentum
              tortor, eu scelerisque enim erat vitae ipsum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
