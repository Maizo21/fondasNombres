"use client";
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas'; // Asegúrate de importar html2canvas
import styles from './fonda.module.css';

export default function Fonda() {
  const [fondaName, setFondaName] = useState('');
  const fondaRef = useRef(null); // Crea una referencia al div que deseas capturar

  const nombresFondas = [
    'La Mortal Fondat 🐱‍👤🤼‍♂️',
    'El beber me llama 🦇',
    'A mal tiempo, wena caña ⏰',
    'Fonda Intensamente Cura2 🧠',
    'La Fondacion 🤑',
    'Fonda la 🧀...porte un terremoto',
    'La Fonda Label, "Un elixir" 🗣',
    'La Puchaina Fondera 🥑👄',
    'Skibidi Fondet 👦🏻🚽',
    'Fonda Los Avenders 🦸‍♂️',
    'Fonda La Casa del Tragon 🍢',
    'Fonda Birrajuice 👻🍻',
    'Fonda Messirve ⚽',
    'Fonda Bebe Reno 🦌🍻',
    'Fonda Cervezuela 🍻',
    'Fonda Kimetsu No Jaivas 🦀',
    'La Clinica, seguro se cura 🏥',
    'Fonda Aqui no entran borrachos (salen)🍻',
    'Fonda Alcoholegio 🎓🍻',
  ];

  const generateFondaName = () => {
    const randomInicio = nombresFondas[Math.floor(Math.random() * nombresFondas.length)];
    setFondaName(randomInicio);
  };

  const saveFondaImg = async () => {
    if (fondaRef.current) {
      const canvas = await html2canvas(fondaRef.current);
      const imgData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'fonda.png';
      link.click();
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Crea el nombre de tu fonda</h1>

        <section className={styles.section}>
          <p>Dale click al botón para crear uno aleatorio</p>
          <button onClick={generateFondaName} className={styles.button}>Crear</button>
        </section>

        <section className={styles.section}>
          <p>Escribe o modifica el nombre de tu fonda</p>
          <input
            type="text"
            value={fondaName}
            onChange={(event) => setFondaName(event.target.value)}
          />
        </section>

        <section className={styles.section}>
          {fondaName && (
            <article className={styles.fonda} ref={fondaRef}> {/* Usamos ref para capturar este div */}
              {fondaName}
            </article>
          )}

        {fondaName && (
          <article className={styles.options}>
            <button className={styles.buttonGuardar} onClick={saveFondaImg}>Guardar</button>
          </article>
        )}
        </section>
      </main>
    </div>
  );
}
