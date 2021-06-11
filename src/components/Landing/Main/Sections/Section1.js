import styles from "./styles.module.css";


const Section1 = () => {
  return (
    <>
                <section className="bg-yellow-100">
            <div className="max-w-2xl pt-24 px-6 text-center mx-auto">
              <h2 className="text-4xl font-semibold text-gray-800">
                Hola, soy{" "}
                <span className="bg-indigo-600 text-white rounded px-1">
                  Javi
                </span>{" "}
                . Un gusto conocerte.
              </h2>
              <p className="text-gray-600 mt-4">
                Si llegaste a mi pagina web, ya es todo un avance!
              </p>
              <div className="flex items-end justify-center mt-16 relative h-64">
                <img src="./assets/avatar2.png" className={styles.avatar} />
              </div>
            </div>
          </section>

    </>
  );
};

export default Section1;