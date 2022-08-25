import { useUsers } from "../actions/users";
import Card from "./Card";
import Loading from "./Loading";

const Page = ({ page, limit, search }) => {
  const { users, isLoading, isError } = useUsers(page, limit, search);

  if (isError) return <h2>{isError}</h2>;
  if (isLoading) return <Loading />;

  return (
    <div className='card_container'>
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Page;
