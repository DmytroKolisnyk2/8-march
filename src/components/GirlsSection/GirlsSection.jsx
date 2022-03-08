import React, { useEffect } from "react";
import "./GirlsSection.scss";
import GirlsPart from "../GirlsPart/GirlsPart";
import Marina from "../../images/girls/Marina.jpg";
import Lizka from "../../images/girls/Lizka.jpg";
import Liza from "../../images/girls/Liza.jpg";
import Katia from "../../images/girls/Katia.jpg";
import Sasha from "../../images/girls/Sasha.jpg";
import Dasha from "../../images/girls/Dasha.jpg";
import Slavic from "../../images/girls/Slavic.jpg";
import Mira from "../../images/girls/Mira.jpg";
import Asia from "../../images/girls/Asia.jpg";
import Grubyk from "../../images/girls/Grubyk.jpg";
import Masha from "../../images/girls/Masha.jpg";
import Nastia from "../../images/girls/Nastia.jpg";

export function GirlsSection() {
  useEffect(() => {}, []);
  return (
    <section className="girls">
      <GirlsPart orientation="left">
        <p className="girls__text">Хай там як просто неможливо забути про</p>
      </GirlsPart>
      <GirlsPart styles img={Lizka} orientation="left">
        <p className="girls__text">юну мотоциклєтчицю</p>
      </GirlsPart>
      <GirlsPart img={Marina} orientation="right">
        <p className="girls__text">повелительницю мідій</p>
      </GirlsPart>
      <GirlsPart img={Sasha} orientation="left">
        <p className="girls__text">перспективну скелелазку</p>
      </GirlsPart>
      <GirlsPart asia img={Asia} orientation="right">
        <p className="girls__text">невтомну домогосподарочку</p>
      </GirlsPart>
      <GirlsPart img={Liza} orientation="left">
        <p className="girls__text">Леона з бравл старсу</p>
      </GirlsPart>
      <GirlsPart img={Katia} orientation="right">
        <p className="girls__text">письменницю зі стажем</p>
      </GirlsPart>
      <GirlsPart img={Dasha} orientation="left">
        <p className="girls__text">переможницю поле чудес</p>
      </GirlsPart>
      <GirlsPart img={Grubyk} orientation="right">
        <p className="girls__text">дівчину Рябоконя</p>
      </GirlsPart>
      <GirlsPart img={Masha} orientation="left">
        <p className="girls__text">нашого діджея</p>
      </GirlsPart>
      <GirlsPart img={Mira} orientation="right">
        <p className="girls__text">дівчину, яка танцює під ліпсі ха навіть на фотосесії</p>
      </GirlsPart>
      <GirlsPart img={Nastia} orientation="left">
        <p className="girls__text">бельгійську вафельку</p>
      </GirlsPart>
      <GirlsPart slavic img={Slavic} orientation="right">
        <p className="girls__text">ну і про нашого піздюка</p>
      </GirlsPart>
      <GirlsPart orientation="left">
        <p className="girls__text">Є багато моментів, які ми ніколи не забудемо</p>
      </GirlsPart>
    </section>
  );
}
export function MiddleSection() {
  return (
    <section className="girls">
      <GirlsPart orientation="left">
        <p className="girls__text girls__text--middle">
          Із такими дівчатами просто неможливо не перемогти
        </p>
      </GirlsPart>
    </section>
  );
}
