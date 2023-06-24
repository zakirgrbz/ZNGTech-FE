import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const SellNow = () => {
  const [brand, setBrand] = useState(``);
  const [model, setModel] = useState(``);
  const [productType, setProductType] = useState(``);
  const [generation, setGeneration] = useState(``);
  const [touchscreen, setTouchscreen] = useState(``);
  const [screenSize, setScreenSize] = useState(``);
  const [graphicsCardModel, setGraphicsCardModel] = useState(``);
  const [ram, setRAM] = useState(``);
  const [hdd, setHDD] = useState(``);
  const [ssd, setSSD] = useState(``);
  const [message, setMessage] = useState(``);
  const [laptopImage, setLaptopImage] = useState(null);

  const user = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("model", model);
    formData.append("generation", generation);
    formData.append("productType", productType);
    formData.append("touchScreen", touchscreen);
    formData.append("screenSize", screenSize);
    formData.append("graphicsCardModel", graphicsCardModel);
    formData.append("ram", ram);
    formData.append("hddCapacity", hdd);
    formData.append("ssdCapacity", ssd);
    formData.append("message", message);
    formData.append("laptopImage", laptopImage);

    await fetch(`http://localhost:8000/api/v1/sellnow?email=${user?.email}`, {
      method: "POST",
      body: formData,
    });
    setBrand("");
    setModel("");
    setGeneration("");
    setProductType("");
    setTouchscreen("");
    setScreenSize("");
    setGraphicsCardModel("");
    setRAM("");
    setHDD("");
    setSSD("");
    setMessage("");
  };

  return (
    <div className="container home1 SellNow Bgg d-flex justify-content-center">
      <div className="col-6">
        <select
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          className="form-select mt-3 mb-3"
          aria-label="Default select example"
          required
        >
          <option>Select Laptop Brand</option>
          <option value="Acer">Acer</option>
          <option value="Acer">Acer</option>
          <option value="Apple">Apple</option>
          <option value="Asus">Asus</option>
          <option value="Dell">Dell</option>
          <option value="HP (Hewlett-Packard)">HP (Hewlett-Packard)</option>
          <option value="Lenovo">Lenovo</option>
          <option value="LG">LG</option>
          <option value="MSI">MSI</option>
          <option value="Razer">Razer</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
          <option value="Toshiba">Toshiba</option>
          <option value="Huawei">Huawei</option>
          <option value="Fujitsu">Fujitsu</option>
          <option value="Panasonic">Panasonic</option>
          <option value="Gateway">Gateway</option>
          <option value="Alienware">Alienware</option>
          <option value="Compaq">Compaq</option>
          <option value="IBM">IBM</option>
          <option value="NEC">NEC</option>
          <option value="Sharp">Sharp</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Gigabyte">Gigabyte</option>
          <option value="Medion">Medion</option>
          <option value="Schenker">Schenker</option>
          <option value="Vero">Vero</option>
          <option value="Chuwi">Chuwi</option>
          <option value="Teclast">Teclast</option>
          <option value="Jumper">Jumper</option>
          <option value="Xiaomi">Xiaomi</option>
        </select>

        <select
          onChange={(e) => setModel(e.target.value)}
          value={model}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Processor Model</option>
          <option value="Core i9">Core i9</option>
          <option value="Core i7">Core i7</option>
          <option value="Core i5">Core i5</option>
          <option value="Core i3">Core i3</option>
          <option value="Pentium">Pentium</option>
          <option value="Celeron">Celeron</option>
          <option value="Xeon">Xeon</option>
          <option value="Ryzen 9">Ryzen 9</option>
          <option value="Ryzen 7">Ryzen 7</option>
          <option value="Ryzen 5">Ryzen 5</option>
          <option value="Ryzen 3">Ryzen 3</option>
          <option value="Athlon">Athlon</option>
          <option value="A-Series">A-Series</option>
          <option value="FX-Series">FX-Series</option>
          <option value="Opteron">Opteron</option>
          <option value="Threadripper">Threadripper</option>
        </select>

        <select
          onChange={(e) => setGeneration(e.target.value)}
          value={generation}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Processor Generation</option>
          <option value="1. Generation">1. Generation</option>
          <option value="2. Generation">2. Generation</option>
          <option value="3. Generation">3. Generation</option>
          <option value="4. Generation">4. Generation</option>
          <option value="5. Generation">5. Generation</option>
          <option value="6. Generation">6. Generation</option>
          <option value="7. Generation">7. Generation</option>
          <option value="8. Generation">8. Generation</option>
          <option value="9. Generation">9. Generation</option>
          <option value="10. Generation">10. Generation</option>
          <option value="11. Generation">11. Generation</option>
          <option value="12. Generation">12. Generation</option>
          <option value="13. Generation">13. Generation</option>
        </select>

        <select
          onChange={(e) => setProductType(e.target.value)}
          value={productType}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Product Type</option>
          <option value="Ultrabook">Ultrabook</option>
          <option value="Gaming Laptop">Gaming Laptop</option>
          <option value="2-in-1 Laptop">2-in-1 Laptop</option>
          <option value="Business Laptop">Business Laptop</option>
          <option value="Portable Laptop">Portable Laptop</option>
          <option value="Home/Work Laptop">Home/Work Laptop</option>
          <option value="Education Laptop">Education Laptop</option>
          <option value="Mobile Workstation">Mobile Workstation</option>
        </select>

        <select
          onChange={(e) => setTouchscreen(e.target.value)}
          value={touchscreen}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Touchscreen</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <select
          onChange={(e) => setScreenSize(e.target.value)}
          value={screenSize}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Screen Size</option>
          <option value="11.6">11.6"</option>
          <option value="12.5">12.5"</option>
          <option value="13.3">13.3"</option>
          <option value="14">14"</option>
          <option value="14.1">14.1"</option>
          <option value="15.6">15.6"</option>
          <option value="16">16"</option>
          <option value="17.3">17.3"</option>
          <option value="18.4">18.4"</option>
        </select>

        <select
          onChange={(e) => setGraphicsCardModel(e.target.value)}
          value={graphicsCardModel}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select Graphics Card</option>
          <option value="Radeon R2">Radeon R2</option>
          <option value="Radeon R3">Radeon R3</option>
          <option value="Radeon R4">Radeon R4</option>
          <option value="Radeon R5">Radeon R5</option>
          <option value="Radeon R6">Radeon R6</option>
          <option value="Radeon R7">Radeon R7</option>
          <option value="Radeon R8">Radeon R8</option>
          <option value="Radeon R9">Radeon R9</option>
          <option value="Radeon 520">Radeon 520</option>
          <option value="Radeon 530">Radeon 530</option>
          <option value="Radeon 540">Radeon 540</option>
          <option value="Radeon 550">Radeon 550</option>
          <option value="Radeon 555">Radeon 555</option>
          <option value="Radeon 560">Radeon 560</option>
          <option value="Radeon 570">Radeon 570</option>
          <option value="Radeon 580">Radeon 580</option>
          <option value="Radeon Vega 3">Radeon Vega 3</option>
          <option value="Radeon Vega 6">Radeon Vega 6</option>
          <option value="Radeon Vega 8">Radeon Vega 8</option>
          <option value="Radeon Vega 10">Radeon Vega 10</option>
          <option value="Radeon RX Vega 11">Radeon RX Vega 11</option>
          <option value="Radeon RX 540">Radeon RX 540</option>
          <option value="Radeon RX 550">Radeon RX 550</option>
          <option value="Radeon RX 560">Radeon RX 560</option>
          <option value="Radeon RX 570">Radeon RX 570</option>
          <option value="Radeon RX 580">Radeon RX 580</option>
          <option selected>Select Graphics Card Model </option>
          <option value="GeForce GTX 1050">GeForce GTX 1050</option>
          <option value="GeForce GTX 1050 Ti">GeForce GTX 1050 Ti</option>
          <option value="GeForce GTX 1060">GeForce GTX 1060</option>
          <option value="GeForce GTX 1070">GeForce GTX 1070</option>
          <option value="GeForce GTX 1080">GeForce GTX 1080</option>
          <option value="GeForce GTX 1650">GeForce GTX 1650</option>
          <option value="GeForce GTX 1650 Ti">GeForce GTX 1650 Ti</option>
          <option value="GeForce GTX 1660 Ti">GeForce GTX 1660 Ti</option>
          <option value="GeForce GTX 1660 Super">GeForce GTX 1660 Super</option>
          <option value="GeForce GTX 1660">GeForce GTX 1660</option>
          <option value="GeForce GTX 2060">GeForce GTX 2060</option>
          <option value="GeForce GTX 2070">GeForce GTX 2070</option>
          <option value="GeForce GTX 2080">GeForce GTX 2080</option>
          <option value="GeForce GTX 2080 Super">GeForce GTX 2080 Super</option>
          <option value="GeForce GTX 2080 Ti">GeForce GTX 2080 Ti</option>
          <option value="GeForce RTX 3050">GeForce RTX 3050</option>
          <option value="GeForce RTX 3050 Ti">GeForce RTX 3050 Ti</option>
          <option value="GeForce RTX 3060">GeForce RTX 3060</option>
          <option value="GeForce RTX 3070">GeForce RTX 3070</option>
          <option value="GeForce RTX 3080">GeForce RTX 3080</option>
          <option value="GeForce RTX 3080 Ti">GeForce RTX 3080 Ti</option>
          <option value="GeForce RTX 3090">GeForce RTX 3090</option>
        </select>

        <select
          onChange={(e) => setRAM(e.target.value)}
          value={ram}
          className="form-select mb-3"
          aria-label="Default select example"
          required
        >
          <option selected>Select RAM</option>
          <option value="2GB">2GB</option>
          <option value="4GB">4GB</option>
          <option value="8GB">8GB</option>
          <option value="12GB">12GB</option>
          <option value="16GB">16GB</option>
          <option value="20GB">20GB</option>
          <option value="24GB">24GB</option>
          <option value="28GB">28GB</option>
          <option value="32GB">32GB</option>
          <option value="36GB">36GB</option>
          <option value="48GB">48GB</option>
          <option value="64GB">64GB</option>
          <option value="128GB">128GB</option>
        </select>

        <select
          onChange={(e) => setHDD(e.target.value)}
          value={hdd}
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Select HDD Capacity</option>
          <option value="60GB">60GB</option>
          <option value="80GB">80GB</option>
          <option value="100GB">100GB</option>
          <option value="120GB">120GB</option>
          <option value="200GB">200GB</option>
          <option value="240GB">240GB</option>
          <option value="320GB">320GB</option>
          <option value="400GB">400GB</option>
          <option value="500GB">500GB</option>
          <option value="1TB">1TB</option>
          <option value="2TB">2TB</option>
          <option value="3TB">3TB</option>
          <option value="4TB">4TB</option>
        </select>

        <select
          onChange={(e) => setSSD(e.target.value)}
          value={ssd}
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option selected>Select SSD Capacity</option>
          <option value="60GB">60GB</option>
          <option value="120GB">120GB</option>
          <option value="240GB">240GB</option>
          <option value="500GB">500GB</option>
          <option value="512GB">512GB</option>
          <option value="1TB">1TB</option>
          <option value="2TB">2TB</option>
          <option value="4TB">4TB</option>
        </select>
        <div className="mt-3 mb-3">
          <label htmlFor="file-upload" className="form-label">
            Explanation:
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            value={message}
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mt-3 mb-3">
          <label htmlFor="file-upload" className="form-label">
            Upload an image:
          </label>
          <input
            id="file-upload"
            type="file"
            name="laptopImage"
            onChange={(e) => setLaptopImage(e.currentTarget.files[0])}
            className="form-control"
            required
          />
        </div>
        <div className="container row col-3  mt-3 align-items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Sell Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellNow;
