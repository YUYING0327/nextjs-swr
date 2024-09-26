import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import { useUser } from "../../actions/users";

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { user, isError, isLoading } = useUser(id);

  if (isError) return <h2>{isError}</h2>;

  if (isLoading) return <Loading />;

  return <div>{user && <Card user={user} />}</div>;
};

export default User;
