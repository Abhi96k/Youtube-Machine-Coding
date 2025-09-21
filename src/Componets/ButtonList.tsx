import Button from "./Button";
export const ButtonList = () => {
  return (
    <div className="flex gap-2">
      <Button name="Home" />
      <Button name="Shorts" />
      <Button name="Subscriptions" />
      <Button name="Originals" />
    </div>
  );
};
