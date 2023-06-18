import SearchButton from "./SearchButton";
import SignInButton from "./SignInButton";
import SubscribeButton from "./SubscribeButton";
import Menu from "./Menu";

export default function Nav() {
  return (
    <div className="flex flex-row-reverse lg:flex-row items-center justify-between basis-full">
      <div className="hidden lg:flex items-center gap-4 ml-2">
        <Menu />
      </div>
      <div className="flex items-center justify-between h-5/6 w-[260px]">
        <SearchButton />
        <div className="flex h-full">
          <SignInButton />
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
}
