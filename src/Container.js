import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Recharge, buyGroc, buyMovie, getmydata } from "./Actions/walletAction";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function Container() {
  const wallet = useSelector((state) => state.data.wallet);
  const user = useSelector((state) => state.data.user);
  const dispatch = useDispatch();
  const [movieAmount, setMovieAmount] = useState(""); // Separate state for movie amount
  const [groceryAmount, setGroceryAmount] = useState(""); // Separate state for grocery amount
  const [rechargeAmount, setRechargeAmount] = useState(""); // Separate state for recharge amount
  const [showBalance, setShowBalance] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // State to determine alert type (success or danger)
  const [showPopup, setShowPopup] = useState(true); // State to show/hide the popup
  const [userInfo, setUserInfo] = useState({ name: "", email: "", mobile: "" }); // State to store user info

  // Handle changes for movie amount input
  const handleMovieAmountChange = (e) => {
    setMovieAmount(e.target.value);
  };

  // Handle changes for grocery amount input
  const handleGroceryAmountChange = (e) => {
    setGroceryAmount(e.target.value);
  };

  // Handle changes for recharge amount input
  const handleRechargeAmountChange = (e) => {
    setRechargeAmount(e.target.value);
  };

  const handleMovie = () => {
    const amount = parseFloat(movieAmount);
    if (wallet <= 0) {
      setAlertMessage("Your balance is 0. Cannot make a purchase.");
      setAlertType("danger");
    } else if (wallet < amount) {
      setAlertMessage("Your balance is critically low. Check your balance.");
      setAlertType("danger");
    } else {
      dispatch(buyMovie(amount));
      setAlertMessage("Movie ticket purchased successfully!");
      setAlertType("success");
      setMovieAmount(""); // Clear the input field
    }
  };

  const handleGrocery = () => {
    const amount = parseFloat(groceryAmount);
    if (wallet <= 0) {
      setAlertMessage("Your balance is 0. Cannot make a purchase.");
      setAlertType("danger");
    } else if (wallet < amount) {
      setAlertMessage("Your balance is critically low. Check your balance.");
      setAlertType("danger");
    } else {
      dispatch(buyGroc(amount));
      setAlertMessage("Grocery items purchased successfully!");
      setAlertType("success");
      setGroceryAmount(""); // Clear the input field
    }
  };

  const handleRecharge = () => {
    const amount = parseFloat(rechargeAmount);
    dispatch(Recharge(amount));
    setAlertMessage("Wallet recharged successfully!");
    setAlertType("success");
    setRechargeAmount(""); // Clear the input field
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const handleAlertLinkClick = (e) => {
    e.preventDefault();
    setShowBalance(true); // Show balance when link is clicked
    setAlertMessage(""); // Clear the alert message
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false); // Hide the popup
  };

  useEffect(() => {
    dispatch(getmydata());
  }, [dispatch]);

  // Background dimming styles
  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.5s ease-in-out",
    opacity: showPopup ? 1 : 0,
    visibility: showPopup ? "visible" : "hidden",
    zIndex: 1040,
  };

  return (
    <>
      {/* Custom Backdrop for user info popup */}
      <div style={backdropStyle}></div>

      <div
        className={`modal fade ${showPopup ? "show d-block" : ""}`}
        tabIndex="-1"
        aria-labelledby="modalTitle"
        aria-hidden={!showPopup}
        style={{ display: showPopup ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitle">Enter Your Information</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handlePopupSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    value={userInfo.mobile}
                    onChange={(e) => setUserInfo({ ...userInfo, mobile: e.target.value })}
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#001F3F" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#ffffff" }}>
            E-Wallet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "#ffffff" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#ffffff" }}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#ffffff" }}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "#ffffff" }}>
                  About Us
                </a>
              </li>
            </ul>
            <form
              className="d-flex ms-auto my-2 my-lg-0 position-relative"
              style={{ width: "200px" }}
            >
              <input
                className="form-control pe-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </form>
            <button className="btn btn-danger ms-2" onClick={toggleBalance}>
              {showBalance ? "Hide Wallet Balance" : "Show Wallet Balance"}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {alertMessage && (
          <div className={`alert alert-${alertType}`} role="alert">
            {alertMessage.includes("Check your balance") && (
              <a href="#" onClick={handleAlertLinkClick} className="alert-link">
                Check balance
              </a>
            )}
            {alertMessage.replace("Check your balance", "")}
          </div>
        )}

        {showBalance && <h3 className="mb-4">Wallet Balance: {wallet}</h3>}

        <h4 className="mb-4">
          Welcome back, {userInfo.name || "User"}! Ready to make a purchase or
          add funds?
        </h4>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded" style={{ width: "18rem" }}>
              <img
                src="https://www.shutterstock.com/shutterstock/photos/1009320268/display_1500/stock-vector-movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with-1009320268.jpg"
                className="card-img-top"
                alt="Movie"
                style={{ height: "14rem", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Buy Movie Ticket</h5>
                <p className="card-text">
                  Purchase a movie ticket or streaming credit.
                </p>
                <div className="input-group mb-3">
                  <span className="input-group-text">Amount</span>
                  <input
                    type="number"
                    onChange={handleMovieAmountChange}
                    className="form-control"
                    aria-label="Amount"
                    value={movieAmount}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleMovie}>
                  Buy Movie
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded" style={{ width: "18rem" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HFgIPQ2ICrARb5Phw-WoFjnrNWctFitLVwCCNYFu&s"
                className="card-img-top"
                alt="Grocery"
                style={{ height: "14rem", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Buy Grocery</h5>
                <p className="card-text">
                  Purchase grocery items using your wallet balance.
                </p>
                <div className="input-group mb-3">
                  <span className="input-group-text">Amount</span>
                  <input
                    type="number"
                    onChange={handleGroceryAmountChange}
                    className="form-control"
                    aria-label="Amount"
                    value={groceryAmount}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleGrocery}>
                  Buy Grocery
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm rounded" style={{ width: "18rem" }}>
              <img
                src="https://selectra.in/sites/selectra.in/files/2021-04/mobile-recharge-plans.png"
                className="card-img-top"
                alt="Recharge"
                style={{ height: "14rem", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">Recharge Wallet</h5>
                <p className="card-text">
                  Add funds to your wallet for future purchases.
                </p>
                <div className="input-group mb-3">
                  <span className="input-group-text">Amount</span>
                  <input
                    type="number"
                    onChange={handleRechargeAmountChange}
                    className="form-control"
                    aria-label="Amount"
                    value={rechargeAmount}
                  />
                </div>
                <button className="btn btn-primary w-100" onClick={handleRecharge}>
                  Recharge Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap JS and dependencies */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default Container;
