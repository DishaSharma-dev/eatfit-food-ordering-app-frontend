import landingPage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white flex flex-col gap-5 text-center shadow-md rounded-lg  py-8 -mt-16">
        <h1 className="font-bold text-5xl tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar onSubmit={handleSearchSubmit} placeholder="Search by City or Town" searchQuery=""></SearchBar>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingPage} />
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the EatFit App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage}></img>
        </div>
      </div>
    </div>
  );
};
