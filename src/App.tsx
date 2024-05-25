import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import { userName } from "@/features/user/userSelectors";

import { HomeLayout } from "./pages";

export const App = () => {
  const name = useAppSelector(userName);

  return (
    <div>
      <h1 className="text-7xl font-bold">App</h1>
      <p>Name : {name}</p>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
      >
        Click Me
      </Button>

      <HomeLayout />

      <Button asChild>
        <a href="/login">Login</a>
      </Button>
    </div>
  );
};
