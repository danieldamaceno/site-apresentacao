import React from "react";
import styles from "./Sobre.module.css";

import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";

export default function Sobre() {
  const sociais = [
    {
      id: "email",
      icon: <MdEmail />,
      opcao: "E-mail",
      nome: "danieel.damaceno@gmail.com",
      link: "mailto:danieel.damaceno@gmail.com",
    },
    {
      id: "github",
      icon: <BsGithub />,
      opcao: "Github",
      nome: "DanielDamaceno",
      link: "https://github.com/danieldamaceno",
    },
    {
      id: "linkedin",
      icon: <ImLinkedin />,
      opcao: "LinkedIn",
      nome: "Daniel Damaceno",
      link: "https://www.linkedin.com/in/danidamaceno/",
    },
    {
      id: "whats",
      icon: <IoLogoWhatsapp />,
      opcao: "Whatsapp",
      nome: "+55 51 99562-8379",
      link: "https://api.whatsapp.com/send?phone=5551995628379&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20servi%C3%A7o.",
    },
  ];

  return (
    <div className="container">
      <div id="sobre" className={styles.Sobre}>
        <h1>Sobre mim</h1>
        <p>
          Sou um profissional apaixonado por tecnologia, com experiência sólida
          em desenvolvimento web e um amplo conjunto de habilidades em várias
          áreas da programação. Possuo conhecimentos avançados em linguagens
          como HTML, CSS, JavaScript e Node.js, o que me permite criar
          interfaces web dinâmicas e funcionais. Estou estudando também
          react.js. Além disso, domino técnicas avançadas de banco de dados,
          garantindo a eficiência e a segurança dos sistemas que desenvolvo.
          Minha jornada no mundo do desenvolvimento também inclui a operação de
          uma loja online, onde aplico minhas habilidades para aprimorar
          processos de desenvolvimento e oferecer uma experiência excepcional
          aos clientes. Estou ávido por oportunidades desafiadoras na área de
          front-end, onde possa aplicar e expandir meu conhecimento técnico,
          colaborando com equipes dinâmicas em projetos inovadores. Estou
          determinado a contribuir de forma significativa em um ambiente que
          valorize a excelência técnica e a criatividade. Estou atualmente em
          busca de oportunidades profissionais na área de programação e estou
          pronto para me dedicar integralmente a novos desafios..
        </p>

        <section className={styles.social}>
          {sociais.map((social) => (
            <a key={social.id} href={social.link}>
              <div className={styles.itens}>
                <span className={styles.icon}>{social.icon}</span>
                <h2>{social.opcao}</h2>
                <p>{social.nome}</p>
              </div>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
