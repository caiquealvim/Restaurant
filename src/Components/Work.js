import React from "react";
import PickMeals from "../Components/assets/pick-meals-image.png";
import ChooseMeals from "../Components/assets/choose-image.png";
import DeliveryMeals from "../Components/assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: "PickMeals",
      title: "Escolher Refeições",
      text: "As melhores refeições você encontra aqui.",
    },
    {
      image: "ChooseMeals",
      title: "escolheu com que frequência",
      text: "as mais escolhidas deixamos no cardapio como referências.",
    },
    {
      image: "DeliveryMeals",
      title: "Fast Deliveries",
      text: "Entrega super rapida à domicílios.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabalho</p>
        <h1 className="primary-subheading">Como é trabalhado.</h1>
        <p className="primary-text">
          Comida sempre feita com muita cautela e dedicação para os nossos
          clientes.
        </p>
        <div>
          <div className="work-section-bottom">
            {workInfoData.map((data) => (
              <div className="work-section-info">
                <div className="info-boxes-img-container">
                  <img src={data.img} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
