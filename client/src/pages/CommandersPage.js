import CommandersList from "../components/CommandersList";

const CommandersPage = () => {
  const troopType = "archer";
  return (
    <section>
      <h1>hi</h1>
      <CommandersList troopType={troopType} />
    </section>
  );
};

export default CommandersPage;
