const addLaptop = async (pLaptop,pEmail) => {
    const newLaptop = {
     
    brand: pLaptop.brand,
    model: pLaptop.model,
    generation: pLaptop.generation,
    productType: pLaptop.productType,
    touchScreen: pLaptop.touchscreen,
    screenSize: pLaptop.screenSize,
    graphicsCardModel: pLaptop.graphicsCardModel,
    ram: pLaptop.ram,
    hddCapacity: pLaptop.hddCapacity,
    ssdCapacity: pLaptop.ssdCapacity,
    message : pLaptop.message,
    laptopImage: pLaptop.laptopImage,
    
    };

    await fetch(`http://localhost:8000/api/v1/sellnow?email=${pEmail}`, {
      method: "POST",
      body: JSON.stringify(newLaptop),
      headers: { "Content-Type": "application/json" },
    });

   
  };
  const sellnowService={addLaptop}

  export default sellnowService; 