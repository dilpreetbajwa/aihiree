import aibrain from "@/../public/img/bn/aibrain.png";
import aiman from "@/../public/img/bn/aiman.png";
import airound from "@/../public/img/bn/airound.png";
import bannerThumb1 from "@/../public/img/bn/bannerthumb1.png";
import dashDouble from "@/../public/img/bn/dashed-dobble.png";
import dhaed from "@/../public/img/bn/dhaedh-single.png";
import lineDash from "@/../public/img/bn/line-dash.png";
import profile from "@/../public/img/bn/profile.jpg";
import vec1 from "@/../public/img/bn/vec1.png";
import vec2 from "@/../public/img/bn/vec2.png";
import f1 from "@/../public/img/frelancer/f1.png";
import f2 from "@/../public/img/frelancer/f2.png";
import f3 from "@/../public/img/frelancer/f3.png";
import favicon from "@/../public/img/logo/favicon.png";
import logo from "@/../public/img/logo/logo.png";
import { menuData } from "@/data/menuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import Select from "react-select";

const Banner = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<null | number>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const path = usePathname()
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 100) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    });
  }, []);
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "#0D47A1",
      color: "#ffffff",
      minWidth: "130px",
      padding: "4px 10px",
      borderRadius: "50px",
      border: "1px solid #DFE0E4",
      boxShadow: "0",
      "&:hover": {
        borderColor: "#DFE0E4",
      },
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "4px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#fff" }),
    singleValue: (styles: any) => ({ ...styles, color: "#fff" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      color: "#fff",
      height: "auto",
    }),
  };
  const handleCloseSearch = (e: MouseEvent): void => {
    e.preventDefault();
    setSearchOpen(false);
  };
  const isActiveMenu = (submenus: any) => {
    return submenus?.find((item: any) => item?.url === path)
  }
  return (
    <section className="banner__section bg__img1 ralt overhid ">
      {/* <!-- Header Here --> */}
      <div className="header__section__attachment">
        <div className="aihire__headertop">
          <div className="container">
            <div className="haderbar__top d-flex align-items-center  justify-content-between">
              <div className="logo__left d-flex align-items-center">
                <Link href="/" className="top__logo">
                  <Image src={logo} alt="logo" />
                </Link>
                <Link href="/how-work" className="pra mdnone inter fw-400">
                  How It Works
                </Link>
                <Link href="/about" className="pra mdnone inter fw-400">
                  Why AIHire
                </Link>
              </div>
              <div className="header__topsearch d-flex align-items-center">
                <button
                  onClick={() => setSearchOpen(true)}
                  type="button"
                  id="searchBtn"
                  className="d-lg-none flex-shrink-0">
                  <i className="bi bi-search"></i>
                </button>
                <form
                  action="#0"
                  className="search__form d-flex align-items-center flex-shrink-0">
                  <i className="bi bi-search"></i>
                  <input type="text" placeholder="Search" />
                  <Select
                    options={[
                      { value: "Talent", label: "Talent" },
                      { value: "Hire Me", label: "Hire Me" },
                      { value: "Professional", label: "Professional" },
                    ]}
                    placeholder="Talent"
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                    styles={selectStyles}
                  />
                </form>
                <Link href="/project" className="cmn--btn">
                  <span className="text-nowrap">Post a Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <header className={`header-section ${menuFixed && "menu-fixed"}`}>
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-menu d-xl-none">
                <Link href="/" className="small__logo">
                  <Image src={favicon} alt="logo" />
                </Link>
              </div>
              <ul className={`main-menu ${menuOpen && "active"}`}>
                {menuData.map(({ id, title, submenus, url }) => (
                  url ? (
                    <li key={id}>
                      <Link href={url} className={path == url ? 'active' : ''}>{title}</Link>
                    </li>
                  ) : (
                    <li key={id} onClick={() => setDropdown((p) => (p == id ? null : id))}>
                      <span className={isActiveMenu(submenus) && 'active-color'}>
                        {title}
                        <i className="bi bi-chevron-down"></i>
                      </span>
                      <ul className={`sub-menu ${dropdown === id && "d-block"}`}>
                        {submenus?.map(({ id, title, url }) => (
                          <li key={id}>
                            <Link href={url} className={path == url ? 'active-color' : ''}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>)

                ))}
              </ul>
              <div className="menu__right__components d-flex align-items-center flex-shrink-0">
                <div className="menu__components d-flex align-items-center">
                  <div className="dropdown">
                    <Link
                      href="#"
                      className="link glose__icon d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,14"
                      aria-expanded="true">
                      <i className="bi bi-globe"></i>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-start"
                      data-popper-placement="bottom-start">
                      <ul className="list">
                        <li>
                          <Link
                            href="#"
                            className="link d-inline-block dropdown-item">
                            <span className="d-block bborder pb-1">
                              {" "}
                              English{" "}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link d-inline-block dropdown-item">
                            <span className="d-block bborder pb-1">
                              Spanish
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link d-inline-block dropdown-item">
                            <span className="d-block bborder pb-1">
                              Arabic
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link d-inline-block dropdown-item">
                            <span className="d-block pb-1">
                              French
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="notification__dropdown">
                    <Link
                      href="/chat-us"
                      className="link glose__icon globe__active">
                      <i className="bi bi-chat-text"></i>
                    </Link>
                  </div>
                  <div className="dropdown notification__dropdown">
                    <Link
                      href="#"
                      className="link glose__icon globe__active"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,14"
                      aria-expanded="true">
                      <i className="bi bi-bell"></i>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end "
                      data-popper-placement="bottom-end">
                      <ul className="list">
                        <li className="mb-16">
                          <Link href="#" className="link d-flex dropdown-item">
                            <Image
                              src={f1}
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fz-16 d-block fw-600 title inter">
                                Jenny95
                              </span>
                              <span className="fz-14 message d-block fw-500 pra inter">
                                Message alert!
                              </span>
                              <span className="fz-10 fw-400 pra inter">
                                10 Min ago
                              </span>
                            </span>
                          </Link>
                        </li>
                        <li className="mb-16">
                          <Link href="#" className="link d-flex dropdown-item">
                            <Image
                              src={f2}
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fz-16 d-block fw-600 title inter">
                                Arle MCcoy
                              </span>
                              <span className="fz-14 message d-block fw-500 pra inter">
                                Message alert!
                              </span>
                              <span className="fz-10 fw-400 pra inter">
                                1 days ago
                              </span>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="link d-flex dropdown-item">
                            <Image
                              src={f3}
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fz-16 d-block fw-600 title inter">
                                Courtney Jr
                              </span>
                              <span className="fz-14 message d-block fw-500 pra inter">
                                Message alert!
                              </span>
                              <span className="fz-10 fw-400 pra inter">
                                2 Month ago
                              </span>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dropdown profie__dropdown">
                    <Link
                      href="#"
                      className="link user__active"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,16"
                      aria-expanded="true">
                      <Image
                        src={profile}
                        alt="image"
                        className="img-fluid rounded-circle objec-fit-cover"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      data-popper-placement="bottom-end">
                      <div className="p-6">
                        <div className="d-flex align-items-center gap-3 max-width">
                          <div className="jerny__uer ralt">
                            <Image
                              src={profile}
                              alt="image"
                              className="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0"
                            />
                            <i className="bi bi-check checks d-flex align-items-center justify-content-center"></i>
                          </div>
                          <div className="flex-grow-1">
                            <h5 className="fz-20 fw-600 title inter mb-0">
                              Jenny95
                            </h5>
                            <span className="d-block fw-400 inter pra fz-16">
                              Info95@mail.com
                            </span>
                          </div>
                        </div>
                        <div className="switch text-center mt-4 bborderdash pb-24 mb-24">
                          <Link
                            href="/signin"
                            className="cmn--btn outline__btn">
                            <span>Switch to Buying</span>
                          </Link>
                        </div>
                        <span className="fz-12 pra d-block fw-400 inter mb-16">
                          Account
                        </span>
                        <ul className="list">
                          <li className="mb-16">
                            <Link
                              href="/profile"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-person-check fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Profile{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="/post-request"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-file-earmark-plus fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Post a Request{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="/notification"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-bell fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Notification{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-16">
                            <Link
                              href="/chat-us"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-chat-text fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Chat{" "}
                              </span>
                            </Link>
                          </li>
                          <li className="mb-24">
                            <Link
                              href="/refer-friend"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-sliders2 fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Refer a Friend{" "}
                              </span>
                            </Link>
                          </li>
                        </ul>
                        <span className="fz-12 pra d-block fw-400 inter mb-16">
                          Billing
                        </span>
                        <ul className="list">
                          <li className="mb-16">
                            <Link
                              href="/setting"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-gear fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Settings{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/payment"
                              className="link d-flex align-items-center gap-2 dropdown-item">
                              <i className="bi bi-credit-card-2-back fz-20"></i>
                              <span className="d-block fz-16 pra fw-500 inter">
                                {" "}
                                Payments{" "}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`header-bar d-lg-none ${menuOpen && "active"}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <!-- Header End --> */}

      <div className="container">
        <div className="banner__content__wrapper pt-50 pb-50">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="banner__content banner__onespace ralt">
                <h4 className="base mb-16  ">Affordable AI Freelancers</h4>
                <span className="d2 title mb-24 fw-600  ">
                  <span className="hover">AI</span> Made{" "}
                  <span className="hover">Smart</span> Freelancing Easy
                </span>
                <p className="fz-20 fw-400 pra inter mb-40  ">
                  Join our community of businesses, entrepreneurs, and
                  freelancers who are passionate about AI and its potential
                </p>
                <form
                  action="#"
                  className="search__component mb-24 d-flex align-items-center justify-content-between  ">
                  <input type="text" placeholder="What you're looking for?" />
                  <button
                    type="button"
                    className="cmn--btn d-flex align-items-center">
                    <span>Search</span>
                    <span>
                      <i className="bi bi-search fz-12"></i>
                    </span>
                  </button>
                </form>
                <div className="banner__aitag d-flex align-items-center  ">
                  <span className="aitag__text fz-16 fw-400 inter pra">
                    Popular Searches
                  </span>
                  <Link
                    href="#"
                    className="cmnborder round100 fz-12 fw-400 inter title">
                    Machine Learning
                  </Link>
                  <Link
                    href="#"
                    className="cmnborder round100 fz-12 fw-400 inter title">
                    NLP Specialists
                  </Link>
                  <Link
                    href="#"
                    className="cmnborder round100 fz-12 fw-400 inter title">
                    Data Scientists
                  </Link>
                  <Link
                    href="#"
                    className="cmnborder round100 fz-12 fw-400 inter title">
                    AI
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="banner__thumb1 ralt">
                <Image src={bannerThumb1} className="w-100" alt="thumb" />
                <Image src={vec1} alt="vector" className="thumb__vector1" />
                <Image src={vec2} alt="vector" className="thumb__vector2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Elements--> */}
      <Image src={aiman} className="element__man" alt="element" />
      <Image src={dhaed} className="element__single" alt="element" />
      <Image src={aibrain} className="element__brain" alt="element" />
      <Image src={dashDouble} className="element__doubble" alt="element" />
      <Image src={lineDash} className="element__dash" alt="element" />
      <Image src={airound} className="element__round" alt="element" />
      {/* <!--Elements--> */}
      <div id="searchPopup" className={`search__popup ${searchOpen && "open"}`}>
        <form className="popup-content d-flex align-items-center">
          <input type="text" placeholder="Search Here" />
          <button id="closeButton" onClick={handleCloseSearch}>
            <i className="bi bi-x-lg"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Banner;
