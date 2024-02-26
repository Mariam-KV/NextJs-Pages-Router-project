import classes from "./MeetupItem.module.css";
export default function MeetUpDetails({ image, title, description, address }) {
  return (
    <div>
      <title>{title}</title>
      <meta name="description" content={description} />

      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
    </div>
  );
}
