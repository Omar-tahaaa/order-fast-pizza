import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayoutPage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="font-pizza grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />

      {isLoading && <Loader />}

      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayoutPage;
