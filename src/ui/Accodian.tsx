import { useState } from "react";
import ColoseOutlined from "../svgs/ColoseOutlined";
import clsx from "clsx";

function Accodian() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="w-full px-14">
      <div
        className={clsx(
          "shadow-lg p-5 rounded-lg mb-4 flex justify-between cursor-pointer w-full ",
          {
            "bg-[#1D00FF] text-white": isOpened,
          }
        )}
        onClick={() => setIsOpened((s) => !s)}
      >
        <h1 className="text-xl font-bold font-roboto">
          Accédez à la légende des boutons pour faciliter votre travail.
        </h1>
        <ColoseOutlined
          clsx={clsx({ "rotate-45": !isOpened, "transition-transform": true })}
        />
      </div>
      {isOpened && (
        <div className="flex flex-col gap-6 bg-white shadow-xl p-4 rounded-xl py-5">
          <p className=" text-xl font-bold ">
            Pour vous aider à naviguer facilement dans la gestion des questions
            lors de notre diffusion en direct, nous avons mis en place une
            légende des boutons qui facilitera votre travail :
          </p>
          <p className="filter-desc">
            <span className="text-[#8000FF] font-bold "> Violet</span> - Questions à
            masquer : Ce bouton vous permettra de masquer temporairement les
            questions inappropriées ou hors sujet. N&apos;hésitez pas à les
            utiliser pour maintenir la pertinence de la discussion.
          </p>
          <p className="filter-desc">
            <span className="text-[#4BB95C] font-bold "> Vert </span>- Questions répondues
            : Une fois que vous avez répondu à une question, utilisez ce bouton
            pour la marquer comme «répondu». Cela permettra d&apos;éviter les
            répétitions et d&apos;assurer une meilleure expérience aux
            spectateurs.
          </p>
          <p className="filter-desc">
            <span className="text-[#E87731] font-bold ">Orange</span> - Ne pas répondre :
            Si une question nécessite une réponse ultérieure ou si elle est en
            attente d&apos;approbation, vous pouvez utiliser le bouton orange
            pour la signaler. Cela vous aidera à suivre les questions en attente
            de traitement.
          </p>
          <p className="filter-desc">
            En utilisant cette légende des boutons, nous espérons que vous
            pourrez gérer efficacement les questions et assurer un déroulement
            fluide et organisé de notre diffusion en direct.
          </p>
        </div>
      )}
    </section>
  );
}

export default Accodian;
