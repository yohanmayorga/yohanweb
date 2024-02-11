import styles from "@/styles/ArchiveCard.module.css";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  des: string;
  listItem: string[];
  linkGithub: string;
  linkDeploy: string;
}

const ArchiveCard = ({
  img,
  title,
  des,
  listItem,
  linkGithub,
  linkDeploy,
}: Props) => {
  return (
    <div className={styles.cardBox}>
      <div>
        <div className={styles.imageBox}>
          <Image className={styles.cardImage} src={img} alt="image" />
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <p className={styles.description}>{des}</p>
      <ul className={styles.items}>
        {listItem.map((item, i) => (
          <li key={1} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.cardLinks}>
        <a href={linkGithub} target="_blank">
          <FiGithub />
        </a>
        <a href={linkDeploy} target="_blank">
          <RxOpenInNewWindow />
        </a>
      </div>
    </div>
  );
};

export default ArchiveCard;
