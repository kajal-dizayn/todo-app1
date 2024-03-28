import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (
  WrappedComponent: React.ComponentType<any>,
  prevent = false
) => {
  const Wrapper = (props: React.PropsWithChildren<any>) => {
    const router = useRouter();

    useEffect(() => {
      const id = localStorage.getItem("id");

      if (!id && !prevent) {
        router.push("/loginUser");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  return Wrapper;
};

export default withAuth;
