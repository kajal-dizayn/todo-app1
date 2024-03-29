import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user.store";

const withAuth = (
  WrappedComponent: React.ComponentType<any>,
  prevent = false
) => {
  const Wrapper = (props: React.PropsWithChildren<any>) => {
    const router = useRouter();
    const { user } = useUserStore();

    useEffect(() => {
      const id = localStorage.getItem("id");
      console.log(user.id, "id");

      // const id = user.id;

      if (!id && !prevent) {
        router.push("/loginUser");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default withAuth;
