import React from 'react'
function About() {
  return (

<div className='container About'>
    <div class="row container col-12 py-5">
         <div class="col-lg-6 px-5">
        <h1 class="display-4 text-danger fw-bold">ZNGTech</h1>
        <p class="lead mb-4 ">This project is a project where people from all over the 
        country who want to sell their second-hand laptops to us get a price offer from us 
        by entering the information and pictures of their laptops..</p>
      </div>
      <div class="col-lg-4 d-lg-block mx-3"><img src="images/laptop6.png"  alt="" class="img-fluid"/></div>
    </div>

<div class="col-11 row mb-5 align-items-center">
      <div class="col-lg-6 px-5 py-5 mx-auto"><img src="images/laptop4.png" alt="" class="img-fluid  mb-lg-0"/></div>
      <div class="col-lg-6 mb-5"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">For everyone</h2>
        <p class="lead mb-4">To create a platform where everyone can easily sell their laptops.
        It is to determine all the features of the laptops easily with the marking method and to give the right price to the seller.
        To take pictures of the product directly on the phone and ensure that they are uploaded.
        To provide the opportunity to sell the product from all over the country with the shipping method.
        It will be a simple, easy-to-use project where the seller will find what she is looking for.
As a result, the seller will sell the idle laptop in his possession. We will have delivered it to another user with another platform ready to use.
</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div>

  <div class="container col-11  py-5">
    <div class="row align-items-center">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x  text-primary"></i>
      <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Recycling of resources</h2>
        <p class="lead text-muted text-bold mb-4">Thanks to this project, people can convert the laptops they have but do not use into money. This contributes to prevent the waste of the country's resources.
        The first of this project is to trick unused idle laptops back into the economy.
      </p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="images/laptop7.png" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
</div>

  <div class="container row py-5 mx-1">
    <div class="row">
      <div class="mx-5 ">
        <h2 class="display-4 text-center font-weight-light">Our team</h2>
        <p class="font-italic text-muted text-center">Our team is a family...</p>
      </div>
   

<div class="mx-3 mt-3 container col-12 px-5 row text-center">
      {/* <!-- Team item--> */}
      <div class="col-xl-3 ">
        <div class="shadow-lg py-5 px-4">

          <div className='AvatarB width="100px" '>
          <img src="images/avatar3.png" alt="" width="110px" class="img-fluid  mb-3  "/>
          </div>                           
          <h5 class="mb-0">Nuray Gürbüz</h5><span class="small text-uppercase text-muted">Design</span>
        </div>
      </div>
      {/* <!-- End-->

      <!-- Team item--> */}
      <div class="col-xl-3 ">
        <div class=" rounded shadow-lg py-5 px-4">
            <div className='AvatarB width="120" height="100"'>
          <img src="images/avatar2.png" alt="" width="75px" class="img-fluid"/>
          </div>
          <h5 class="mb-0">Zakir Gürbüz</h5><span class="small text-uppercase text-muted">Finance</span>
        </div>
      </div>
      {/* <!-- End-->

      <!-- Team item--> */}
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class=" rounded shadow-lg py-5 px-4">

        <div className='AvatarB width="100px" height="100px"'>
          <img src="images/child2.png" alt="financer" width="100px" class="img-fluid mb-3"/>
          </div>

          <h5 class="mb-0">Selim</h5><span class="small text-uppercase text-muted">ENGINEER</span>
        </div>
      </div>
      {/* <!-- End-->

      <!-- Team item--> */}
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="rounded shadow-lg py-5 px-4">
          
        <div className='AvatarB width="80" height="80"'>
          <img src="images/avatar1.png" alt="" width="100px" class="img-fluid  mb-3 "/>
          </div>
          <h5 class="mb-0">Salih</h5><span class="small text-uppercase text-muted">CHEF</span>
        </div>
      </div>
      {/* <!-- End--> */}
    </div>
    </div>
</div>
</div>
)
}
export default About