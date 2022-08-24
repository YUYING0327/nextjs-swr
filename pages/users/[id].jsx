import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Card from "../../components/Card";

const User = () => {
  const [user, setUser] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      const res = await axios.get(`users/${id}`);
      setUser(res.data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <Loading />;

  return <div>{user && <Card user={user} />}</div>;
};

export default User;
