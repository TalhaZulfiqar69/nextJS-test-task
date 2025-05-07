import React from 'react';
import styles from './UserCard.module.css';
import Image from 'next/image';


type User = {
  id: number;
  name: string;
  description: string;
  image: string;
  jobTitle: string;
  imageAlt: string;
};

const UserCard = ({ id, name, description, image, jobTitle, imageAlt }: User) => (
  <li className={styles.card} tabIndex={id} aria-label={`${name}, ${description}`}>
      <div>
        <Image
          src={image}
          alt={imageAlt}
          width={80}
          height={80}
          className={styles.avatar}
          loading="lazy"
        />
      </div>

      <div className={styles.text}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{jobTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
);

export default UserCard;
